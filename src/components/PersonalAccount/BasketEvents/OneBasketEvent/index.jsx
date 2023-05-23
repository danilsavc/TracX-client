import React from "react";

import styles from "./OneBasketEvent.module.scss";
import startup from "../../../../Assets/img/startup.svg";
import { useDispatch } from "react-redux";
import { fetchDeleteEvent } from "../../../../Redux/slices/viewBasket";

const OneBasketEvent = ({ bcgColor, format, title, descriptions, data, id }) => {
  const dispatch = useDispatch();
  const style = {
    backgroundColor: bcgColor,
  };

  const handleDelete = async () => {
    if (window.confirm("Ти впевнений що хочеш видалити цей товар?")) {
      dispatch(fetchDeleteEvent({ id }));
    }
  };

  return (
    <div className={styles.content} style={style}>
      <div className={styles.header}>
        <img src={startup} alt='startup' />
        <span>{data}</span>
        <span className={styles.status}>{format}</span>
      </div>

      <div className={styles.title}>
        <span>{title}</span>
      </div>

      <div className={styles.description}>
        <span>{descriptions}</span>
      </div>

      <button onClick={handleDelete}>Відмінити реєстрацію</button>
    </div>
  );
};

export default OneBasketEvent;
