import React from "react";
import { css } from "@emotion/css";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

const Constructor = () => {
  return (
    <>
      <Result
        className={css`
          height: 93.9vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
        icon={<SmileOutlined />}
        title="正在建设中"
        extra={
          <Button type="primary">
            <Link to="/">返回首页</Link>
          </Button>
        }
      />
    </>
  );
};

export default Constructor;
