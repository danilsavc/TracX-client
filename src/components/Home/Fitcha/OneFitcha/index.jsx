import React from "react";

import style from "./OneFitcha.module.scss";

const OneFitcha = ({ title }) => {
  return (
    <div className={style.content}>
      <div className={style.box}>
        <div className={style.ring}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default OneFitcha;
