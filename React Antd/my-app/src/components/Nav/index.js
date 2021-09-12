import React, { useEffect, useState } from "react";
import {
  Menu,
  Modal,
  Tabs,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Cascader,
  AutoComplete,
  Row,
  Col,
} from "antd";

import UserServer from "../userPassword";
import { Link } from "react-router-dom";
import "./nav.less";
import {
  HomeOutlined,
  BookOutlined,
  ReadOutlined,
  MacCommandOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { TabPane } = Tabs;

const { Option } = Select;

const right = {
  marginLeft: "auto",
};

//定义服务器地址
const Server = UserServer.baseUrl;
console.log(Server);

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home",
      visible: false,
      userData: Server + "/User",
    };
  }
  //nav时间处理
  handleMenuClick = (e) => {
    console.log("click ", e);
    //判断每一个Meun.Item的key是否为login
    if (e.key === "login") {
      //key为login，将模态框显示为可见
      this.setState({ visible: true });
    } else {
      //key不为login，选择当前的key
      this.setState({ current: e.key });
    }
  };
  //cancel事件处理
  handleCancel = () => {
    //点击Cancel后将模态框设置为不可见
    this.setState({
      visible: false,
    });
  };

  //组件挂载
  componentDidMount() {
    axios
      //获取服务器数据目标
      .get(Server + "/User")
      .then((response) => {
        //打印服务器数据到控制台
        console.log(response.data);
        const userData = this.state.userData;
        //将获取到的数据提交到userData
        this.setState({
          userData,
        });
        console.log(userData);
      })
      //抓捕到错误
      .catch((error) => {
        //将错误信息打印到控制台
        console.log(error);
      });
  }

  callback = (key) => {
    //将当前点击的key打印到控制台
    console.log(key);
  };

  onFinish = (values) => {
    //点击登录以后将输入的账号，密码打印到控制台
    console.log("Received values of form: ", values);
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[this.state.current]}
          mode={"horizontal"}
          style={{ padding: "0 50px" }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">list</Link>
          </Menu.Item>
          <Menu.Item key="book" icon={<BookOutlined />}>
            <Link to="/book">list</Link>
          </Menu.Item>
          <Menu.Item key="announcement" icon={<ReadOutlined />}>
            <Link to="/announcement">list</Link>
          </Menu.Item>
          <Menu.Item key="aboutus" icon={<MacCommandOutlined />}>
            <Link to="/aboutus">list</Link>
          </Menu.Item>
          <Menu.Item key="login" style={right} icon={<UserOutlined />}>
            个人中心
          </Menu.Item>
        </Menu>
        <Modal
          title="登录 / 注册"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="登录" key="1">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  //验证器
                  rules={[
                    {
                      //用户名是必须的
                      required: true,
                      //空用户名信息
                      message: "请必须输入你的名字！",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  //验证器
                  rules={[
                    {
                      //密码是必须的
                      required: true,
                      //空用户名信息
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    登 录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form
                {...this.formItemLayout}
                form={this.form}
                name="register"
                onFinish={this.onFinish}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "86",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="电子邮件"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="密码"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="确认密码"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="nickname"
                  label="用户名"
                  tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your nickname!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="residence"
                  label="居住地址"
                  rules={[
                    {
                      type: "array",
                      required: true,
                      message: "Please select your habitual residence!",
                    },
                  ]}
                >
                  <Cascader options={this.residences} />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="手机号码"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={this.prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item label="验证码" extra="我们必须验证您不是机器人">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="captcha"
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please input the captcha you got!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Button>获取验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Should accept agreement")
                            ),
                    },
                  ]}
                  {...this.tailFormItemLayout}
                >
                  <Checkbox>
                    我已阅读过<a href="true">协议</a>
                  </Checkbox>
                </Form.Item>
                <Form.Item {...this.tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    注册
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}
