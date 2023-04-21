import React from "react";

import style from "./Events.module.scss";
import OneEvent from "./OneEvent";
import Category from "./Category";

const Events = () => {
  return (
    <div className={style.events}>
      <h1>IT івенти</h1>
      <Category />
      <div className={style.items}>
        {[...new Array(5)].map((item, index) => (
          <OneEvent key={index} backgroundColor='#FF686D' />
        ))}
      </div>
    </div>
  );
};

export default Events;
