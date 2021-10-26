import React, { useEffect, useState } from "react";
import { Tabs, Card, Image, Row, Col } from "antd";
import { css } from "@emotion/css";
import userServer from "../userPassword";
import axios from "axios";

const { TabPane } = Tabs;

const Photos = () => {
  const gridStyle = {
    width: "20%",
    textAlign: "center",
    height: "100%",
  };
  const gridCard = `
  .ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top > div > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav {
      margin: 0 0 0 0;
  }
  `;

  const [skinData, setSkinData] = useState([]);
  const [eipData, setEipData] = useState([]);
  useEffect(() => {
    userServer
      .get("/skin")
      .then((response) => {
        setSkinData(response);
      })
      .catch((error) => {
        console.log(error);
      });
    userServer
      .get("/eip")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={css`
        ${gridCard}
      `}
    >
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="海子姐全皮肤" key="1">
          <div
            className={css`
              column-count: 5;
              -webkit-column-count: 5;
              -moz-column-count: 5;
              column-width: 20%;
              -webkit-column-width: 20%;
              -moz-column-column-width: 20%;
              padding: 0 12px;
            `}
          >
            {skinData.map((e) => (
              <Image src={e.images} />
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Photos;
