import React from "react";

import styles from "./OneBasketEvent.module.scss";
import startup from "../../../../Assets/img/startup.svg";
const OneBasketEvent = () => {
  const style = {
    backgroundColor: "#32384d",
  };

  return (
    <div className={styles.content} style={style}>
      <div className={styles.header}>
        <img src={startup} alt='startup' />
        <span>data</span>
        <span className={styles.status}>format</span>
      </div>

      <div className={styles.title}>
        <span>title</span>
      </div>

      <div className={styles.description}>
        <span>descriptions</span>
      </div>

      <button>Відминити реєстрацію</button>
    </div>
  );
};

export default OneBasketEvent;
