import React from "react";

import style from "./Navbar.module.scss";

import logo from "../../../Assets/img/logo.svg";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img src={logo} alt='logo' />
      <nav className={style.nav}>
        <ul>
          <li>Головна</li>
          <li>Івенти</li>
          <li>Про нас</li>
          <li>Контакти</li>
        </ul>
      </nav>
      <button>Увійти</button>
    </div>
  );
};

export default Navbar;
