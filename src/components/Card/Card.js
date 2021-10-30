import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { Typography } from "antd";
const { Link } = Typography;

const { Meta } = Card;

const cardStyle = {
  paddingLeft: "10px",
  paddingBottom: "20px",
};

const carddata = [
  {
    title: "【手书/七海Nana7mi】想要变得可爱",
    images:
      "https://i1.hdslb.com/bfs/archive/d4ed188ac8fe91b1c0dba07bd44d051538baab7c.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1DQ4y1Y7kr?from=search&seid=12737748394170063170&spm_id_from=333.337.0.0",
  },
  {
    title: "【描改手书-PV版/梓鲨小队】Turing Love！",
    images:
      "https://i1.hdslb.com/bfs/archive/c7a9a356732e31844257d2819fc0162b742f61fa.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1B3411i7qH?from=search&seid=14633619667311710192&spm_id_from=333.337.0.0",
  },
  {
    title: "🦈Ring Ring Ring🐒",
    images:
      "https://i2.hdslb.com/bfs/archive/0af5773a257384eca5a3193f20f951ef9732c91e.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1gA411P7ir?from=search&seid=17398542654454404588&spm_id_from=333.337.0.0",
  },
  {
    title: "【七海nana7mi】一辈子只能看一次的七海大光头！！！！",
    images:
      "https://i2.hdslb.com/bfs/archive/c96bce8531abbcf03510fcc5097cd1899999ba08.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1u34y1X7Lv?from=search&seid=5526869417716060298&spm_id_from=333.337.0.0",
  },
  {
    title: "【七海nana7mi】主播的南半球！感谢高三和三高",
    images:
      "https://i2.hdslb.com/bfs/archive/9d450ad0e05de73985439aedf96185b6fa0bb433.jpg@336w_190h_1c.webp",
    url: "https://www.bilibili.com/video/BV1V44y1C7gh/?spm_id_from=333.788.recommend_more_video.-1",
  },
  {
    title: "【七海】🦈云 宫 迅 音🦈",
    images:
      "https://i2.hdslb.com/bfs/archive/40753549ab9cbdb22739cf705244a9437cd5c2bc.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1y64y1s7nR?from=search&seid=12703878530419951565&spm_id_from=333.337.0.0",
  },
  {
    title: "【七海Nana7mi】神病小将，鲨鱼所追逐的梦之光点",
    images:
      "https://i0.hdslb.com/bfs/archive/68ebf7ff4a153395b7752982192a3760c57e318d.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1d64y1i7GY?from=search&seid=14138117939260151811&spm_id_from=333.337.0.0",
  },
  {
    title: "【七海】有些人就是《LOSER》",
    images:
      "https://i0.hdslb.com/bfs/archive/c045fb5356c476001c57088fdca1b817d2426ae0.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1mM4y1g7MF?spm_id_from=333.788.b_636f6d6d656e74.7",
  },
  {
    title: "【七海】〇〇全都有病。海子姐单曲《ヨビ》（ルマ/Ruma）",
    images:
      "https://i1.hdslb.com/bfs/archive/cb656d40ab72aa7c2f1989e98d025fcb21bb876e.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1kg41157kJ/?spm_id_from=333.788.recommend_more_video.17",
  },
  {
    title: "【七海圣经】🦈圣病节🦈",
    images:
      "https://i1.hdslb.com/bfs/archive/d0d490d2b806e119fa1edbc069c32472caca3bc0.jpg@400w_250h_1c.webp",
    url: "https://www.bilibili.com/video/BV1cf4y1w7zj/?spm_id_from=333.788.recommend_more_video.5",
  },
];

const Cards = () => {
  //用于渲染卡片
  // const [cardData, setCardData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    //获取card的数据
    // userServer
    //   .get(card)
    //   .then((respose) => {
    //     //将数据存入cardData中
    //     setCardData(respose);
    //     console.log(cardData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Modal.error({
    //       title: "出错啦",
    //       content: "链接数据时出现错误请检查数据连接是否正常！",
    //     });
    //   });
    axios
      .get("https://api.bilibili.com/x/space/arc/search?mid=434334701&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp")
      .then((respose) => {
        setVideoData(respose.data.data.list.vlist);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ed556a" },
      { opacity: 1, color: "#ffaaee" },
    ],
    from: { opacity: 1, color: "#ffaaee", display: "inline" },
  });

  return (
    <>
      <h2>
        🥰<animated.div style={styles}>海子姐近期投稿</animated.div>
      </h2>
      <div
        className={css`
          display: flex;
          margin-bottom: 10px;
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
            videoData.map((e) => (
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
                      src={e.pic}
                      style={{ objectFit: "cover", height: "156px" }}
                    />
                  }
                >
                  <Link
                    href={"https://www.bilibili.com/video/" + e.bvid}
                    target="_blank"
                  >
                    <Meta title={e.title} description="传送门👉" />
                  </Link>
                </Card>
              </div>
            ))
          }
        </div>
      </div>
      <h2>
        😊<animated.div style={styles}>能转的二创</animated.div>
      </h2>
      <div
        className={css`
          display: flex;
          margin-bottom: 10px;
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
            carddata.map((e) => (
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
    </>
  );
};

export default Cards;
