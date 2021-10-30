import React, { useEffect, useState } from "react";
import { Tabs, Image } from "antd";
import { css } from "@emotion/css";
import userServer from "../userPassword";

const skin = [
  {
    images: "https://i.loli.net/2021/10/24/ScKPLGxdHmjyBV3.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/24/qivlt35sOD2LWc6.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/YVtikAEPhNaqDs3.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/KXj2oCkx4pIcgeT.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/rKXMZnYLS2sTGb6.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/N78LHbw6ihAcDrp.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/gbZDS9n4HYdALoW.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/FHNgxXCJsoi15R8.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/FlhfTGQBpZMDi8H.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/NoqQ13a4i9bWkdM.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/K3hpRv7ucZ9eXmO.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/QFP1cSeVJKsGDC6.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/2OhrvIxwK8duMjt.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/rnJmPfMqAw43ted.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/9dOSIeqL35NfZip.png",
  },
  {
    images: "https://i.loli.net/2021/10/24/kAQtzOJDER8249V.png",
  },
  {
    images: "https://i.loli.net/2021/10/25/YgfLBOlryItECAd.png",
  },
  {
    images: "https://i.loli.net/2021/10/25/FngDJPxmo18cYW9.png",
  },
  {
    images: "https://i.loli.net/2021/10/25/yEjbeZcoBxlVv8u.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/25/xGhJLyguXS5c9si.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/25/ej8p7zwQXSqxsEK.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/25/pgeMEP2l3xtqO96.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/25/HITm1loVbAcEe2J.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/25/ZIJ47HYCwMjAfXb.jpg",
  },
  {
    images: "https://i.loli.net/2021/10/25/AuRHFpMJO3iwL1n.jpg",
  },
];

const { TabPane } = Tabs;

const Photos = () => {
  const gridCard = `
  .ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top > div > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav {
      margin: 0 0 0 0;
  }
  `;
  useEffect(() => {
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
            {skin.map((e) => (
              <Image src={e.images} />
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Photos;
