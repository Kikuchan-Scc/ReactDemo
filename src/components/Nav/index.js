import React from "react";
import { Menu } from "antd";
import Modaled from "./Moudle";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import "./nav.less";
import {
  HomeOutlined,
  ReadOutlined,
  MacCommandOutlined,
} from "@ant-design/icons";

export default class Nav extends React.Component {
  state = {
    current: "home"
  };
  //nav事件处理
  handleMenuClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[current]}
          mode={"horizontal"}
          className={css`
            padding: 0 50px;
          `}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="book">
            <Link to="/skin">海子姐的衣柜</Link>
          </Menu.Item>
          <Menu.Item key="announcement" icon={<ReadOutlined />}>
            <Link to="/announcement">海子姐周报</Link>
          </Menu.Item>
          <Menu.Item key="aboutus" icon={<MacCommandOutlined />}>
            <Link to="/aboutus">关于</Link>
          </Menu.Item>
          {/* <Menu.Item key="login" style={right}>
            <Modaled />
          </Menu.Item> */}
        </Menu>
    );
  }
}
