import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

import logo from "../../../Assets/img/logo.svg";

import Modal from "../../Modal";
import Registration from "../../Registration";

const isActive = ({ isActive }) =>
  isActive ? `${style.link} ${style.linkActive}` : `${style.link}`;

const Navbar = () => {
  const [modalActive, setModalActive] = React.useState(true);

  return (
    <div className={style.navbar}>
      <img src={logo} alt='logo' />
      <nav className={style.nav}>
        <NavLink to='/' className={isActive}>
          <span>Головна</span>
        </NavLink>
        <NavLink to='/events' className={isActive}>
          <span>Івенти</span>
        </NavLink>
        <NavLink to='/about-us' className={isActive}>
          <span>Про нас</span>
        </NavLink>
        <NavLink to='/contact' className={isActive}>
          <span>Контакти</span>
        </NavLink>
      </nav>
      <button onClick={() => setModalActive(true)}>Увійти</button>

      <Modal active={modalActive} setActive={setModalActive}>
        <Registration />
      </Modal>
    </div>
  );
};

export default Navbar;
