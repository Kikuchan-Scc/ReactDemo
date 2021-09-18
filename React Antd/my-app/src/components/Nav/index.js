import React, { useEffect, useState } from "react";
import { Menu } from "antd";

import Modaled from "./Moudle";
import { Link } from "react-router-dom";
import "./nav.less";
import {
  HomeOutlined,
  BookOutlined,
  ReadOutlined,
  MacCommandOutlined,
} from "@ant-design/icons";

//将个人中心按钮右对齐
const right = {
  marginLeft: "auto",
};

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //路由切换判断
      current: "home",
      visible: false,
    };
  }
  //nav事件处理
  handleMenuClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
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
          <Menu.Item key="login" style={right}>
            <Modaled />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
