import React from "react";

import style from "./AddFormat.module.scss";

const AddFormat = () => {
  return (
    <div className={style.box}>
      <input type='text' placeholder='Наприклад: Online' minLength={2} maxLength={10} />
      <p>Категорія повиненна містити мінімум 2 символи, а максимально 10 символів.</p>
      <button>Додати формат</button>
    </div>
  );
};

export default AddFormat;
