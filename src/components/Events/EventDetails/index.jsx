import React from "react";

import styles from "./EventDetails.module.scss";

import logo from "../../../Assets/img/logo.svg";
import Order from "./Order";

const EventDetails = () => {
  const style = {
    backgroundColor: "#FF686D",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} style={style}>
        <div className={styles.header__box}>
          <h1 className={styles.title}>Воркшоп: Why Next JS is a big deal in 2023</h1>
          <h2 className={styles.subtitle}>Next.js online воркшоп</h2>
          <div className={styles.details}>
            <span className={styles.data}>29 квітня</span>
            <span className={styles.format}>Online</span>
          </div>
          <button className={styles.btn}>Записатися</button>
          <img src={logo} alt='logo' />
        </div>
      </div>

      <div className={styles.main}>
        <h1 style={style}>Формат:</h1>
        <p>Дата та час: 29 квітня, 12:00 - 15:30, (Kyiv time, GMT+3).</p>
        <p>Воркшоп відбудеться українською мовою.</p>
        <p>Подія пройде онлайн, використовуючи платформу Zoom.</p>
        <h1 style={style}>Аудиторія:</h1>
        <p>Необхідно базові знання та досвід з React.</p>
        <h1 style={style}>Програма:</h1>
        <ul>
          <li>Знайомство</li>
          <li>Презентація про Next JS у 2023</li>
          <li>Розробка додатку з SSR на Next JS</li>
          <li>Розробка SPA на Next JS</li>
          <li>Деплой на Vercel</li>
          <li>Деплой на AWS</li>
          <li>Q&A</li>
        </ul>
      </div>

      <Order />
    </div>
  );
};

export default EventDetails;
