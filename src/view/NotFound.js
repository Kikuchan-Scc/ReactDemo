import React, { Component } from "react";
import { css } from "@emotion/css";
import { Result } from "antd";

export default class NotFound extends Component {
  render() {
    return (
      <Result
        className={css`
          height: 93.9vh;
          padding-top: 120px;
        `}
        status="404"
        title="哎呀！走丢惹"
        subTitle="对不起您访问的页面不存在"
      />
    );
  }
}
