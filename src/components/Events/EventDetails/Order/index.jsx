import React from "react";

import styles from "./Order.module.scss";
import { exchange } from "../../../../utils/exchange";

const Order = () => {
  const [euro, setEuro] = React.useState(0);
  exchange().then((euroToUah) => {
    let roundNumber = Math.round(2400 / euroToUah);
    setEuro(roundNumber);
  });

  return (
    <div className={styles.order}>
      <h1 id='order'>Вартісь квитків</h1>
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
          <span className={styles.euro}> ≈€{euro}</span>
        </div>

        <button>Записатися</button>
      </div>
    </div>
  );
};

export default Order;
