import React from "react";

import style from "./Information.module.scss";

const Information = () => {
  return (
    <div className={style.information}>
      <div className={style.block}>
        <span className={style.title}>Ім'я</span>
        <span className={style.content}>Данило</span>
      </div>
      <div className={style.block}>
        <span className={style.title}>Прізвище</span>
        <span className={style.content}>Жигун</span>
      </div>
      <div className={style.block}>
        <span className={style.title}>Пошта</span>
        <span className={style.content}>danilsavc@gmail.com</span>
      </div>

      <button>Вийти з аккаунта</button>
    </div>
  );
};

export default Information;
