import React from "react";

import style from "./Moderator.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CreateEvent from "./CreateEvent";
import UpdateEvent from "./UpdateEvent";

const Moderator = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={style.carouselTabs}>
      <div className={style.tabButtons}>
        <button
          className={`${style.tabButton} ${activeSlide === 0 ? style.active : ""}`}
          onClick={() => handleSlideChange(0)}
        >
          Додавання події
        </button>
        <button
          className={`${style.tabButton} ${activeSlide === 1 ? style.active : ""}`}
          onClick={() => handleSlideChange(1)}
        >
          Редагування події
        </button>
      </div>

      <Carousel
        selectedItem={activeSlide}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={false}
        showIndicators={false}
      >
        <div>
          <div className={style.slideContent}>
            <h1>Додавання події</h1>
            <CreateEvent />
          </div>
        </div>
        <div>
          <div className={style.slideContent}>
            <h1>Редагування події</h1>
            <UpdateEvent />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Moderator;
