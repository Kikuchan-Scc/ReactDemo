import React from "react";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

const layoutContent = {
  minHeight: "280px",
  padding: "24px",
  background: "#fff",
};

export default class content extends React.Component {
  render() {
    return (
      <div>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={layoutContent}>Content</div>
        </Content>
      </div>
    );
  }
}
