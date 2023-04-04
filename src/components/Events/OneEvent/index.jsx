import React from "react";

import styles from "./OneEvent.module.scss";

import startup from "../../../Assets/img/startup.svg";

const OneEvent = () => {
  const style = {
    backgroundColor: "#FF5733",
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

      <button>Детальніше</button>
    </div>
  );
};

export default OneEvent;
