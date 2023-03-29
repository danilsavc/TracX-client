import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

import logo from "../../../Assets/img/logo.svg";

const isActive = ({ isActive }) =>
  isActive ? `${style.link} ${style.linkActive}` : `${style.link}`;

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img src={logo} alt='logo' />
      <nav className={style.nav}>
        <NavLink to='/' className={isActive}>
          <span>Головна</span>
        </NavLink>
        <NavLink to='/event' className={isActive}>
          <span>Івенти</span>
        </NavLink>
        <NavLink to='/about-us' className={isActive}>
          <span>Про нас</span>
        </NavLink>
        <NavLink to='/contact' className={isActive}>
          <span>Контакти</span>
        </NavLink>
      </nav>
      <button>Увійти</button>
    </div>
  );
};

export default Navbar;
