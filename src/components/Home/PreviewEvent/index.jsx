import React from "react";

import style from "./PreviewEvent.module.scss";
import OneEvent from "../../Events/OneEvent";

const PreviewEvents = () => {
  return (
    <div className={style.events}>
      <div className={style.header}>
        <h1>Події</h1>
        <button>Усі події</button>
      </div>

      <div className={style.items}>
        {[...new Array(3)].map((item, index) => (
          <OneEvent key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreviewEvents;
