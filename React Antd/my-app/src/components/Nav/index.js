import React from "react";
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

const { TabPane } = Tabs;

const { Option } = Select;

const right = {
  marginLeft: "auto",
};

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home",
      visible: false,
    };
  }

  handleMenuClick = (e) => {
    console.log("click ", e);
    if (e.key === "login") {
      this.setState({ visible: true });
    } else {
      this.setState({ current: e.key });
    }
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  callback = (key) => {
    console.log(key);
  };

  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[this.state.current]}
          mode={"horizontal"}
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
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
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
                  rules={[
                    {
                      required: true,
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
                  label="E-mail"
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
                  label="Password"
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
                  label="Confirm Password"
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
                  label="Nickname"
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
                  label="Habitual Residence"
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
                  label="Phone Number"
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

                <Form.Item
                  name="website"
                  label="Website"
                  rules={[
                    {
                      required: true,
                      message: "Please input website!",
                    },
                  ]}
                >
                  <AutoComplete
                    options={this.websiteOptions}
                    onChange={this.onWebsiteChange}
                    placeholder="website"
                  >
                    <Input />
                  </AutoComplete>
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select gender!",
                    },
                  ]}
                >
                  <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Captcha"
                  extra="We must make sure that your are a human."
                >
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
                      <Button>Get captcha</Button>
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
                    I have read the <a>agreement</a>
                  </Checkbox>
                </Form.Item>
                <Form.Item {...this.tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Register
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
