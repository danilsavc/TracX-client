import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./OneEvent.module.scss";

import startup from "../../../Assets/img/startup.svg";

import { EVENTS_ROUTE } from "../../../utils/consts";

const OneEvent = ({ bcgColor, data, format, title, descriptions, id }) => {
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
      <NavLink to={EVENTS_ROUTE + `/${id}`}>
        <button>Детальніше</button>
      </NavLink>
    </div>
  );
};

export default OneEvent;
