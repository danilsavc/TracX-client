import React from "react";
import style from "./Color.module.scss";

const Color = ({ colors, selectedColor, setSelectedColor }) => {
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={style.param}>
      <p>Оберіть основний колір заднього фону вашої події</p>
      <div className={style.colors}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`${style[`color${index + 1}`]} ${
              selectedColor === color ? style.active : ""
            }`}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Color;
