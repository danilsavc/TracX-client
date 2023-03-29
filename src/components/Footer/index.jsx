import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Footer.module.scss";

import instagram from "../../Assets/img/instagram.svg";
import facebook from "../../Assets/img/facebook.svg";
import twitter from "../../Assets/img/twitter.svg";

const isActive = ({ isActive }) =>
  isActive ? `${style.link} ${style.linkActive}` : `${style.link}`;

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <nav className={style.hard}>
          <h2>Технічні івенти</h2>
          <NavLink to='/' className={isActive}>
            <span>FrontEnd</span>
          </NavLink>
          <NavLink to='/' className={isActive}>
            <span>BackEnd</span>
          </NavLink>
          <NavLink to='/' className={isActive}>
            <span>Java</span>
          </NavLink>
        </nav>

        <nav className={style.soft}>
          <h2>Нетехнічні курси</h2>
          <NavLink to='/' className={isActive}>
            <span>SMM</span>
          </NavLink>
          <NavLink to='/' className={isActive}>
            <span>Project Manajer</span>
          </NavLink>
          <NavLink to='/' className={isActive}>
            <span>Businnes Analyst</span>
          </NavLink>
        </nav>

        <nav className={style.social}>
          <h2>Ми у соц мережах</h2>
          <a href='https://instagram.com'>
            <img src={instagram} alt='instagramm' />
          </a>
          <a href='https://twitter.com'>
            <img src={twitter} alt='twitter' />
          </a>
          <a href='https://facebook.com'>
            <img src={facebook} alt='facebook' />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
