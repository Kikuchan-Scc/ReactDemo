import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Avatar, Button, Space } from "antd";
import { css } from "@emotion/css";
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel]);

const ShowPages = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ed556a" },
      { opacity: 1, color: "#ffaaee" },
    ],
    from: { opacity: 1, color: "#ffaaee" },
  });

  const [getApi, setGetApi] = useState([]);
  useEffect(() => {
    axios
      .get("/api1")
      .then((response) => {
        setGetApi(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Swiper
      mousewheel={true}
      direction={"vertical"}
      className={css`
        height: 100vh;
      `}
    >
      <SwiperSlide>
        <div
          className={css`
            height: 100vh;
            background: url("https://i.loli.net/2021/10/17/gAvnp9Q2jiJr3Ly.jpg")
              rgba(0, 0, 0, 0.5) no-repeat center center;
            background-blend-mode: multiply;
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              padding-bottom: 20px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            `}
          >
            <Avatar
              size={150}
              src="https://i.loli.net/2021/10/17/WKp8o2lUqFiL1S6.jpg"
              className={css`
                border: 3px solid white;
              `}
            />
            <div
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-left: 20px;
              `}
            >
              <animated.div
                style={styles}
                className={css`
                  font-size: 35px;
                `}
              >
                七海Nana7mi单推主页
              </animated.div>
              <div>
                <Space>
                  <Link to="/Home">
                    <Button ghost shape={"round"}>
                      进入主页
                    </Button>
                  </Link>
                  <a href="https://live.bilibili.com/21452505" target="_blank">
                    <Button ghost shape={"round"}>
                      海子姐直播间
                    </Button>
                  </a>
                  <a href="https://space.bilibili.com/434334701" target="_blank">
                    <Button ghost shape={"round"}>
                      海子姐个人空间
                    </Button>
                  </a>
                </Space>
              </div>
            </div>
          </div>
          <div
            className={css`
              margin-top: 20px;
            `}
          >
            <h2
              className={css`
                color: rgba(255, 255, 255, 0.8);
              `}
            >
              鲨鱼也想要抱抱
            </h2>
            <div
              className={css`
                text-align: center;
                position: relative;
                top: 200px;
              `}
            >
              <svg
                t="1634888615105"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2409"
                width="30"
                height="30"
              >
                <path
                  d="M558.933333 853.333333V128h-42.666666v733.866667l-145.066667-145.066667-29.866667 29.866667 192 192 192-192-29.866666-29.866667-136.533334 136.533333z"
                  fill="#ffffff"
                  p-id="2410"
                ></path>
              </svg>
              <div
                className={css`
                  color: white;
                `}
              >
                滚动下滑
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={css`
          height: 100vh;
          background: rgba(0, 0, 255, 0.5) no-repeat;
          background-size: cover;
        `}
      >
        <div
          className={css`
            height: 100vh;
            background: url("https://i.loli.net/2021/10/22/fhFsDgJdoBYrVQR.jpg")
              rgba(0, 0, 0, 0.5) no-repeat center center;
            background-blend-mode: multiply;
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              padding-bottom: 20px;
            `}
          >
            <div>
              <h1
                className={css`
                  color: white;
                `}
              >
                你们身边没有别的女孩子吗？
              </h1>
              <div
                className={css`
                  color: white;
                `}
              >
                如果没有的话... 那我就...我就...
                勉为其难...当你身边的...女生吧...
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ShowPages;
