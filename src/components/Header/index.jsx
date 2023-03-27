import React from "react";
import Navbar from "./Navbar";

import style from "./Header.module.scss";

const Header = () => {
  const pathHome = true;

  if (pathHome) {
    return (
      <div className={style.header}>
        <Navbar />
        <div className={style.span}>
          <span>Залишайтеся впевненими з TracX: ваш надійний трекер IT подій!</span>
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
