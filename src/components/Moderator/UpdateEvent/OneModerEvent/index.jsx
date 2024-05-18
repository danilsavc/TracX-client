import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./OneModerEvent.module.scss";

import startup from "../../../../Assets/img/startup.svg";

import { useDispatch } from "react-redux";
import { fetchDeleteModerEvent } from "../../../../Redux/slices/moderEvents";
import { MODERATOR_ROUTE, UPDATE_ROUTE } from "../../../../utils/consts";

const OneModerEvent = ({ bcgColor, data, format, title, descriptions, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (window.confirm("Ти впевнений що хочеш видалити цей товар?")) {
      dispatch(fetchDeleteModerEvent({ id }));
    }
  };

  const style = {
    backgroundColor: bcgColor,
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
      <button onClick={handleDelete}>Видалити цю подію</button>
      <NavLink to={MODERATOR_ROUTE + UPDATE_ROUTE + `/${id}`}>
        <button>Оновити цей івент</button>
      </NavLink>
    </div>
  );
};

export default OneModerEvent;
