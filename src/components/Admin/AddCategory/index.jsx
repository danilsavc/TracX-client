import React from "react";

import style from "./AddCategory.module.scss";

const AddCategory = () => {
  return (
    <div className={style.box}>
      <input type='text' placeholder='Наприклад: React' minLength={2} maxLength={10} />
      <p>Категорія повиненна містити мінімум 2 символи, а максимально 10 символів.</p>
      <button>Додати категорію</button>
    </div>
  );
};

export default AddCategory;
