import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Navbar.module.scss";

import logo from "../../../Assets/img/logo.svg";

import Modal from "../../Modal";
import Auth from "../../Auth";

import { openModal } from "../../../Redux/slices/modal";

const isActive = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector((state) => state.auth);
  const style = {
    backgroundColor: "#273da4",
  };

  // const token = window.localStorage.getItem("token");

  return (
    <div
      className={styles.navbar}
      style={location.pathname === "/" ? { backgroundColor: "" } : style}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
          <span>TracX</span>
        </div>

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

        {data ? (
          <NavLink to='/cabinet' className={styles.btn}>
            <button className={styles.cabinet}>Особистий кабінет</button>
          </NavLink>
        ) : (
          <button onClick={() => dispatch(openModal())}>Увійти</button>
        )}
      </div>

      <Modal>
        <Auth />
      </Modal>
    </div>
  );
};

export default Navbar;
