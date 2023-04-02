import React from "react";

import style from "./Login.module.scss";

const Login = ({ setReg }) => {
  return (
    <div className={style.login}>
      <h3>Увійти в особистий кабінет</h3>
      <input type='email' placeholder='Електронна адреса' />
      <span>Обов'язково для заповнення</span>
      <input type='password' placeholder='Пароль' />
      <span>Обов'язково для заповнення</span>
      <button>Увійти</button>
      <p onClick={() => setReg(false)}>Зареєструватися</p>
    </div>
  );
};

export default Login;
