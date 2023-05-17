import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./PersonalAccount.module.scss";
import Information from "./Information";
import BasketEvents from "./BasketEvents";

import account from "../../Assets/img/account.svg";
import calendar from "../../Assets/img/calendar.svg";

const PersonalAccount = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={style.carouselTabs}>
      <div className={style.tabButtons}>
        <img
          src={account}
          alt='account'
          className={`${style.tabButton} ${activeTab === 0 ? style.active : ""}`}
          onClick={() => handleTabChange(0)}
        />

        <img
          src={calendar}
          alt='calendar'
          className={`${style.tabButton} ${activeTab === 1 ? style.active : ""}`}
          onClick={() => handleTabChange(1)}
        />
      </div>
      <Carousel
        selectedItem={activeTab}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={false}
        showIndicators={false}
      >
        <div>
          <div className={style.slideContent}>
            <h1>Особиста Інформація</h1>
            <Information />
          </div>
        </div>
        <div>
          <div className={style.slideContent}>
            <h1>Заплановані події</h1>
            <BasketEvents />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default PersonalAccount;
