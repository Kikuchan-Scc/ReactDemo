import React from "react";
import { css } from "@emotion/css";
import Cards from "../Card/Card";
import { Layout } from "antd";
import "swiper/swiper-bundle.css";
import Footer from "../Footer/footer";
const { Content } = Layout;

export default class content extends React.Component {
  render() {
    return (
      <div>
        <Content>
          <div
            className={css`
              min-height: 280px;
              padding: 24px;
              background: #fff;
            `}
          >
            <Cards />
          </div>
        </Content>
        <Footer />
      </div>
      
    );
  }
}
