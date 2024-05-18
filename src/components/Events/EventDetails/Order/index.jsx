import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddInBasket, resetBasket } from "../../../../Redux/slices/addBasket";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import styles from "./Order.module.scss";
import { exchange } from "../../../../utils/exchange";

import ThreeDots from "../../../Skeletons/ThreeDots";
import LoaderComponent from "../../../Skeletons/LoaderComponent";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = ({ price }) => {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.basket);

  const { data, isLoading, isError } = useQuery("exchange", exchange, { keepPreviousData: true });
  const { id } = useParams();

  const onClickOrder = () => {
    dispatch(fetchAddInBasket({ eventId: id }));
  };

  React.useEffect(() => {
    if (status === "loaded") {
      toast.success(message);
      dispatch(resetBasket());
    }
    if (status === "error") {
      toast.error(message);
      dispatch(resetBasket());
    }
  }, [message, status, dispatch]);

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return <ThreeDots />;
  }

  return (
    <div className={styles.order}>
      <ToastContainer />
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

        <button onClick={onClickOrder}>Записатися</button>

        {status === "loading" ? <LoaderComponent /> : ""}
      </div>
    </div>
  );
};

export default Order;
