import React from "react";

import style from "./Fitcha.module.scss";
import OneFitcha from "./OneFitcha";

const fitcha = [
  { title: "Підбірка івентів" },
  { title: "Онлайн реєстрація" },
  { title: "Налаштування профілю" },
  { title: "Рейтинг" },
];

const Fitcha = () => {
  return (
    <div className={style.fitcha}>
      <h1>Ключові фічи</h1>
      <div className={style.content}>
        {fitcha.map((item, index) => (
          <OneFitcha key={index} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Fitcha;
