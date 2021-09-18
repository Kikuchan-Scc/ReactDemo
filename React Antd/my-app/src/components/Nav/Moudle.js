//引入图标
import { UserOutlined, LockOutlined, AntDesignOutlined } from "@ant-design/icons";
//引入状态管理hooks
import React, { useEffect, useState } from "react";
//引入axios
import axios from "axios";
//网络请求
import userServer from "../userPassword";
//引入antd Ui库组件
import {
  Modal,
  Avatar,
  Form,
  Input,
  Select,
  message,
  Button,
  Checkbox,
  Tabs,
  Row,
  Col,
  Cascader,
} from "antd";
import { Content } from "antd/lib/layout/layout";
const { TabPane } = Tabs;
const { Option } = Select;

// 定义服务器地址
const baseUrl = userServer.baseUrl;

//居住地数据
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
//表单布局
const formItemLayout = {
  labelCol: {
    xs: {
      span: 32,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 32,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

//创建Modal组件
const Modaled = () => {
  //创建状态管理默认状态为false
  const [isModalVisible, setIsModalVisible] = useState(false);
  //写入数据
  const [userData, setUserData] = useState([]);
  //当前状态是否存在错误
  const [serverError, setServerError] = useState(false);
  //是否高亮
  const [current] = useState(false);
  //判断是否为登录状态
  const [isLogin, setIsLogin] = useState(false);
  //因为登录时会为其用户分配一个uid如果这个用户存在uid，并且当前登录状态为false
  if (localStorage.getItem("uid") && isLogin === false) {
    //我们就将其登录状态设置为true
    setIsLogin(true);
  }
  //显示模态框
  const showModal = (e) => {
    setIsModalVisible(true);
  };
  //隐藏，关闭模态框
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  //判断是否能正常获取数据
  useEffect(() => {
    axios
      .get(baseUrl + "/user")
      .then((respose) => {
        setUserData(respose.data);
        console.log(respose.data);
      })
      .catch((error) => {
        //让控制台打印出错误信息
        console.log(error);
        //因为捕捉到错误将状态设置为true
        setServerError(true);
        //弹出错误框
        Modal.error({
          title: "出错啦",
          content: "链接数据时出现错误请检查数据连接是否正常！",
        });
      });
  }, []);

  //登陆成功
  const onFinish = (values) => {
    console.log("登录成功:", values);
    const existUser =
      //筛选userData中的数据
      userData.filter(
        //将数据中的name转换为小写 === 输入的用户名转换为小写
        (e) => e.name.toLowerCase() === values.username.toLowerCase()
      ).length !== 0
        ? //该用户存在
          userData.filter(
            (e) => e.name.toLowerCase() === values.username.toLowerCase()
          )[0].id
        : //返回false
          false;
    console.log("uid" + ":" + existUser);
    if (existUser === false) {
      Modal.error({
        title: "用户不存在",
        content: "用户名为空或用户不存在，请重新输入😊",
      });
    }
    if (userData[existUser - 1].password === values.password) {
      //设置uid
      localStorage.setItem("uid", existUser);
      message.success("登陆成功捏~");
      // 三秒后刷新页面
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      //弹出错误框
      Modal.error({
        title: "密码错误",
        content: "你是不是铸币阿，自己的密码都能输错😒",
      });
    }
  };

  //注册动作
  const onEnroll = (values) => {
    console.log("注册成功:", values);
    //检查用户名是否已经存在
    const existUser = userData.filter(
      (e) => e.name.toLowerCase() === values.username.toLowerCase()
    ).length
      ? true
      : false;
    console.log(existUser);
    if (existUser) {
      Modal.error({
        title: "用户已存在",
        content: values.username + " " + "这个用户名已经被占用啦，换一个吧😔",
      });
    }
    //检查邮箱是否被注册过了
    const existEmail = userData.filter(
      //检查数据中的Email是否等于输入框的Email是的话就true咯不是就false咯
      (e) => e.email.toLowerCase() === values.email.toLowerCase()
    ).length
      ? true
      : false;
    console.log(existEmail);
    if (existEmail) {
      Modal.error({
        title: "警告",
        content: "这个邮箱已经被那些闲的人注册过了，换一个吧😔",
      });
    }
    //将数据提交到userData
    axios.get(userServer.baseUrl + "/user").then((response) => {
      setUserData(response.data);
      //id
      const userid = response.data.length + 1;
      //提交！
      axios({
        //请求动作
        method: "POST",
        //上传目标
        url: baseUrl + "/user",
        data: {
          id: userid,
          name: values.username,
          nickname: values.nickname,
          password: values.password,
          email: values.email,
          residence: values.residence,
          phone: values.phone,
          gender: values.gender,
        },
      })
        //注册成功
        .then(() => {
          message.success("注册成功啦！快来和Nana米贴贴吧🥵");
          //3秒后刷新页面
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          Modal.error({
            title: "错误",
            content: "无法连接到数据",
          });
        });
    });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const callback = (key) => {
    console.log(key);
  };
  const fromFloatR = {
    float: "right",
  };
  const allWidth = {
    width: "100%",
  };
  return (
    <>
      {isLogin ? (
        <Avatar size="small" src="http://q1.qlogo.cn/g?b=qq&nk=792142895&s=640" onClick={showModal} />
      ) : (
        <Avatar size="small" icon={<UserOutlined />} onClick={showModal} />
      )}
      <Modal
        title="登录 / 注册"
        visible={isModalVisible}
        onCancel={handleCancel}
        onClick={showModal}
        footer={null}
      >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="登录" key="1">
            <Form
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                //验证器
                rules={[
                  {
                    //必须填写
                    required: true,
                    //警告信息
                    message: "用户名为空或用户不存在，请正确输入",
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
                    message: "密码错误",
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

                <a style={fromFloatR} href="">
                  忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={allWidth}>
                  登录！登录！
                </Button>
                <a href="">现在注册吧！</a>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onEnroll}
              style={{ paddingRight: "60px" }}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="用户名"
                tooltip="您登录账户的账号"
                rules={[
                  {
                    required: true,
                    message: "请输入昵称！",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="nickname"
                label="昵称"
                tooltip="您的社交昵称"
                rules={[
                  {
                    required: true,
                    message: "请输入一个昵称",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="电子邮箱"
                rules={[
                  {
                    type: "email",
                    message: "输入邮箱格式不正确",
                  },
                  {
                    required: true,
                    message: "请输入你的邮箱",
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
                    message: "请输入密码",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="重复密码"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "请重复您的密码！",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("两次输入的密码不匹配"));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="residence"
                label="居住地"
                rules={[
                  {
                    type: "array",
                    required: true,
                    message: "请输入您的居住地",
                  },
                ]}
              >
                <Cascader options={residences} />
              </Form.Item>

              <Form.Item
                name="phone"
                label="电话号码"
                rules={[
                  {
                    required: true,
                    message: "请输入你的电话号码！",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="gender"
                label="性别"
                rules={[
                  {
                    required: true,
                    message: "请选择您的性别！",
                  },
                ]}
              >
                <Select placeholder="选择您的性别">
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                  <Option value="other">其他</Option>
                </Select>
              </Form.Item>

              <Form.Item label="验证码" extra="我们需要确保你不是机器人">
                <Row gutter={1}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "请输入验证码！",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Button>获取</Button>
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
                        : Promise.reject(new Error("我们必须同意这个协议")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  我已阅读并且 <a href="">同意协议</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  注册！注册！
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default Modaled;
