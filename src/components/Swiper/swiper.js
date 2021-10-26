import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import userServer from "../userPassword";
import "./styles.css";
import { css } from "@emotion/css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Swipers = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    userServer.get("/banner").then((response) => {
      setBanner(response);
      console.log(response);
    });
  }, []);
  return (
    <React.Fragment>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={css`
          height: 93.9vh;
        `}
      >
        {banner.map((e) => {
          return (
            <SwiperSlide>
              <img src={e.images} style={{ objectFit: "cover" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default Swipers;
