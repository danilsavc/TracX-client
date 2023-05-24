import React, { useState } from "react";

import style from "./Admin.module.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AddCategory from "./AddCategory";
import AddFormat from "./AddFormat";
import SearchUser from "./SearchUser";

const Admin = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
          Додавання категорії
        </button>
        <button
          className={`${style.tabButton} ${activeSlide === 1 ? style.active : ""}`}
          onClick={() => handleSlideChange(1)}
        >
          Додавання формату
        </button>

        <button
          className={`${style.tabButton} ${activeSlide === 3 ? style.active : ""}`}
          onClick={() => handleSlideChange(3)}
        >
          Пошук користувача
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
            <h1>Додавання категорії</h1>
            <AddCategory />
          </div>
        </div>
        <div>
          <div className={style.slideContent}>
            <h1>Додавання формату</h1>
            <AddFormat />
          </div>
        </div>

        <div>
          <div className={style.slideContent}>
            <h1>Пошук користувача</h1>
            <SearchUser />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Admin;
