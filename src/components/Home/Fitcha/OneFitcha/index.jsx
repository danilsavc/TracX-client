import React from "react";

import style from "./OneFitcha.module.scss";

const OneFitcha = ({ img, title }) => {
  return (
    <div className={style.content}>
      <div className={style.box}>
        <div className={style.ring}>
          <img src={img} alt='svg' />
        </div>
      </div>
      <span>{title}</span>
    </div>
  );
};

export default OneFitcha;
