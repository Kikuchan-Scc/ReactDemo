import React from "react";
import { css } from "@emotion/css";
import Cards from "../Card/Card"
import { Layout } from "antd";
import Swipers from "../Swiper/swiper";
const { Content } = Layout;

export default class content extends React.Component {
  render() {
    return (
      <div>
        <Swipers />
        <Content style={{padding: '20px 50px'}}>
          <div className={css`
            min-height: 280px;
            padding: 24px;
            background: #fff;
          `}>
            <Cards />
          </div>
        </Content>
      </div>
    );
  }
}
