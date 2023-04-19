import React from "react";
import { NavLink } from 'react-router-dom';

import styles from "./OneEvent.module.scss";

import startup from "../../../Assets/img/startup.svg";

import { EVENTS_ROUTE } from "../../../utils/consts";


const OneEvent = ({ backgroundColor }) => {
  const style = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.content} style={style}>
      <div className={styles.header}>
        <img src={startup} alt='startup' />
        <span>10 квітня</span>
        <span className={styles.status}>онлайн</span>
      </div>

      <div className={styles.title}>
        <span>FrontEnd</span>
      </div>

      <div className={styles.description}>
        <span>
          Ти навчишся створювати вебсайти і застосунки на JavaScript та зможеш працювати Junior
          Fullstack Developer
        </span>
      </div>
      <NavLink to={EVENTS_ROUTE + "/:id"}><button>Детальніше</button></NavLink>
      
    </div>
  );
};

export default OneEvent;
