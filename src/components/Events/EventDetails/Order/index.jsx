import React from "react";

import styles from "./Order.module.scss";
import { exchange } from "../../../../utils/exchange";
import { useQuery } from "react-query";
import ThreeDots from "../../../Skeletons/ThreeDots";

const Order = ({ price }) => {
  const { data, isLoading, isError } = useQuery("exchange", exchange, { keepPreviousData: true });

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return <ThreeDots />;
  }

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
          <span className={styles.uah}>{price} UAH</span>
          <span className={styles.euro}> ≈€{data ? Math.ceil(price / data) : 0}</span>
        </div>

        <button>Записатися</button>
      </div>
    </div>
  );
};

export default Order;
