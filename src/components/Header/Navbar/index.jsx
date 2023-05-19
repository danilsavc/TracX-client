import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

import logo from "../../../Assets/img/logo.svg";

import Modal from "../../Modal";
import Auth from "../../Auth";
import { useDispatch } from "react-redux";
import { openModal } from "../../../Redux/slices/modal";

const isActive = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const style = {
    backgroundColor: "#273da4",
  };
  return (
    <div
      className={styles.navbar}
      style={location.pathname === "/" ? { backgroundColor: "" } : style}
    >
      <div className={styles.container}>
        <img src={logo} alt='logo' />
        <nav className={styles.nav}>
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
        <button onClick={() => dispatch(openModal())}>Увійти</button>
      </div>

      <Modal>
        <Auth />
      </Modal>
    </div>
  );
};

export default Navbar;
