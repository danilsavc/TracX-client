import React from "react";

import styles from "./Order.module.scss";

const Order = () => {
  return (
    <div className={styles.order}>
      <h1>Вартісь квитків</h1>
      <div className={styles.order__box}>
        <h1>Attendee's Ticket</h1>
        <ul>
          <li>Доступ до онлайн воркшопу</li>
          <li>Презентація воркшопу</li>
          <li>Доступ до онлайн воркшопу (1рік)</li>
          <li>Сертефікат учасника</li>
        </ul>
        <div className={styles.price}>
          <span className={styles.uah}>2400 UAH</span>
          <span className={styles.euro}> ≈€60</span>
        </div>

        <button>Записатися</button>
      </div>
    </div>
  );
};

export default Order;
