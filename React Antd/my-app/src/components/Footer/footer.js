import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default class footer extends Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: "center" }}>
          <p>
            如果有对本站有什么建议，<b>可联系:3292270491@qq.com</b>
          </p>
        </Footer>
      </div>
    );
  }
}
