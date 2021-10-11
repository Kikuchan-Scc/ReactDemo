import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@emotion/css";
import "swiper/swiper-bundle.css";

const ShowPages = () => {
  return (
    <Swiper
      direction={"vertical"}
      className={css`
        height: 93.9vh;
      `}
    >
      <SwiperSlide>
        <div
          className={css`
            height: 93.9vh;
            background: url(https://i.loli.net/2021/10/11/fsiF9vJm4PrHtAW.jpg)
              no-repeat;
            background-size: cover;
          `}
        ></div>
      </SwiperSlide>
      <SwiperSlide
        className={css`
          height: 93.9vh;
          background: url(https://i.loli.net/2021/10/11/fsiF9vJm4PrHtAW.jpg)
            no-repeat;
          background-size: cover;
        `}
      ></SwiperSlide>
    </Swiper>
  );
};

export default ShowPages;
