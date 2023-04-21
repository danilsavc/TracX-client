import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import style from "./Carousel.module.scss";

const img = [
  "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg",
  "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
  "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

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
        // autoPlay={true}
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
