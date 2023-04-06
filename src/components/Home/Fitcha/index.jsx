import React from "react";

import style from "./Fitcha.module.scss";
import OneFitcha from "./OneFitcha";

import rate from "../../../Assets/img/podium.svg";
import settings from "../../../Assets/img/settings.svg";
import knowledge from "../../../Assets/img/knowledge.svg";
import event from "../../../Assets/img/event.svg";

const fitcha = [
  { img: rate, title: "Рейтінг" },
  { img: settings, title: "Нашаштування профілю" },
  { img: knowledge, title: "Онлайн реєстрація" },
  { img: event, title: "Календар подій" },
];

const Fitcha = () => {
  return (
    <div className={style.fitcha}>
      <h1>Ключові фічи</h1>
      <div className={style.content}>
        {fitcha.map((item, index) => (
          <OneFitcha key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Fitcha;
