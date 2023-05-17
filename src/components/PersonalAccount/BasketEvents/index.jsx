import React from "react";

import styles from "./BasketEvents.module.scss";
import OneBasketEvent from "./OneBasketEvent";

const BasketEvents = () => {
  return (
    <div className={styles.content}>
      <OneBasketEvent />
      <OneBasketEvent />
      <OneBasketEvent />
      <OneBasketEvent />
    </div>
  );
};

export default BasketEvents;
