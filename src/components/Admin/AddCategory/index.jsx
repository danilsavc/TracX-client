import React from "react";

import style from "./AddCategory.module.scss";
import { useDispatch } from "react-redux";
import { fetchAddCategory, resetData } from "../../../Redux/slices/addFilters";

const AddCategory = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState("");

  const onClickAdd = () => {
    dispatch(resetData());
    dispatch(fetchAddCategory({ name: value }));
    setValue("");
  };

  return (
    <div className={style.box}>
      <input
        type='text'
        placeholder='Наприклад: React'
        minLength={2}
        maxLength={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Категорія повиненна містити мінімум 2 символи, а максимально 10 символів.</p>
      <button onClick={onClickAdd}>Додати категорію</button>
    </div>
  );
};

export default AddCategory;
