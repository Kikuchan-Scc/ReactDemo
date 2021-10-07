import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { Card, Modal, Empty } from "antd";
import userServer from "../userPassword";
import { Typography } from "antd";
const { Link } = Typography;

const { Meta } = Card;

const cardStyle = {
  paddingLeft: "10px",
  paddingBottom: "10px"
};

const Cards = () => {
  //用于渲染卡片
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    //获取card的数据
    userServer
      .get("/card")
      .then((respose) => {
        //将数据存入cardData中
        setCardData(respose);
      })
      .catch((error) => {
        console.log(error);
        Modal.error({
          title: "出错啦",
          content: "链接数据时出现错误请检查数据连接是否正常！",
        });
      });
  }, []);

  return cardData.length === 0 ? (
    <Empty
      description={"暂无数据"}
      className={css`
        margin-top: 100px;
      `}
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  ) : (
    <>
      <h2>😊能转的二创</h2>
      <div
        className={css`
          display: flex;
          margin-bottom : 10px
        `}
      >
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          {
            //渲染卡片
            cardData.map((e) => (
              <div
                style={cardStyle}
                className={css`
                  width: 20%;
                `}
              >
                <Card
                  hoverable
                  src=""
                  cover={
                    <img
                      alt="example"
                      src={e.images}
                      style={{ objectFit: "cover", height: "156px" }}
                    />
                  }
                >
                  <Link href={e.url} target="_blank">
                    <Meta title={e.title} description="传送门👉" />
                  </Link>
                </Card>
              </div>
            ))
          }
        </div>
      </div>
      <h2>🥰海子姐近期投稿</h2>
    </>
  );
};

export default Cards;
