import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default class footer extends Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: "center" }}>
          <p>Ant Design ©2018 Created by Ant UED</p>
        </Footer>
      </div>
    );
  }
}
