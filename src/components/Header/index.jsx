import React from "react";
import { useLocation } from "react-router-dom";

import style from "./Header.module.scss";
import Navbar from "./Navbar";

const Header = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className={style.header}>
        <Navbar />
        <div className={style.container}>
          <div className={style.span}>
            <span>Залишайтеся впевненими з TracX: ваш надійний трекер IT подій!</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.headerSecond}>
        <Navbar />
      </div>
    );
  }
};

export default Header;
