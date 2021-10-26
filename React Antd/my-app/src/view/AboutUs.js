import React from "react";
import { css } from "@emotion/css";
import About from "../components/About/about";
import Nav from "../components/Nav/";
import { Layout } from "antd";
const { Content } = Layout;

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Content style={{ padding: "20px 50px" }}>
          <div
            className={css`
              min-height: 280px;
              padding: 24px;
              background: #fff;
            `}
          >
            <About />
          </div>
        </Content>
      </div>
    );
  }
}
