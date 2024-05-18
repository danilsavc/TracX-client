import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import style from "./Carousel.module.scss";

const img = ["https://shorturl.at/loz02", "https://shorturl.at/gnqEQ", "https://shorturl.at/fjQ26"];

const CarouselTeam = () => {
  return (
    <div className={style.content}>
      <Carousel
        className={style.root}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        {img.map((img, index) => (
          <img key={index} src={img} alt='img'></img>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselTeam;
