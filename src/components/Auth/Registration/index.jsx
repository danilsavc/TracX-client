import React from "react";

import style from "./Registration.module.scss";
import { NavLink } from "react-router-dom";

const Registration = ({ setReg }) => {
  return (
    <div className={style.login}>
      <h3>Зареєструватися</h3>
      <input type='text' placeholder="Ім'я" />
      <span>Обов'язково для заповнення</span>
      <input type='text' placeholder='Прізвище' />
      <span>Обов'язково для заповнення</span>
      <input type='email' placeholder='Електронна пошта' />
      <span>Обов'язково для заповнення</span>
      <input type='password' placeholder='Пароль' />
      <span>Обов'язково для заповнення</span>
      <input type='password' placeholder='Повторіть пароль' />
      <span>Обов'язково для заповнення</span>
      <NavLink className={style.btn} to='/cabinet'>
        <button>Зареєструватися</button>
      </NavLink>

      <p onClick={() => setReg(true)}>Увійти в особистий кабінет</p>
    </div>
  );
};

export default Registration;
