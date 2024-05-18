import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { events_id, fetchBasketEvents, fetchViewBasket } from "../../../Redux/slices/viewBasket";
import { getFormatNameById } from "../../../utils/formatUtils";
import formatDate from "../../../utils/formatDate";

import styles from "./BasketEvents.module.scss";
import ThreeDots from "../../Skeletons/ThreeDots";
import OneBasketEvent from "./OneBasketEvent/index";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmptyBasket from "./EmptyBasket";

const BasketEvents = () => {
  const dispatch = useDispatch();
  const {
    status,
    arr_id_status,
    arr_id,
    status_events,
    events,
    status_delete,
    message_delete,
    data,
  } = useSelector((state) => state.viewBasket);
  const { format } = useSelector((state) => state.filter);

  React.useEffect(() => {
    dispatch(fetchViewBasket());
  }, [dispatch, status_delete]);

  React.useEffect(() => {
    if (status === "loaded") {
      dispatch(events_id());
    }
  }, [status, dispatch, data]);

  React.useEffect(() => {
    if (arr_id_status === "loaded") {
      dispatch(fetchBasketEvents({ events_id: arr_id }));
    }
  }, [dispatch, arr_id_status, arr_id]);

  React.useEffect(() => {
    if (status_delete === "loaded") {
      toast.success(message_delete);
    }
  }, [status_delete, message_delete]);

  if (status_events === "loaded") {
    return (
      <>
        <ToastContainer />
        <div className={styles.content}>
          {events.map((item, index) => (
            <OneBasketEvent
              key={index}
              data={formatDate(item.data)}
              descriptions={item.descriptions}
              title={item.title}
              format={getFormatNameById(format, item.formatId)}
              bcgColor={item.bcgColor}
              id={item.id}
            />
          ))}
        </div>
      </>
    );
  } else if (events === null) {
    return <EmptyBasket />;
  } else {
    return <ThreeDots />;
  }
};

export default BasketEvents;
