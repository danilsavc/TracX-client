import React from "react";

import style from "./AddFormat.module.scss";
import { useDispatch } from "react-redux";
import { fetchAddFormat, resetData } from "../../../Redux/slices/addFilters";

const AddFormat = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const onClickAdd = () => {
    dispatch(resetData());
    dispatch(fetchAddFormat({ name: value }));
    setValue("");
  };

  return (
    <div className={style.box}>
      <input
        type='text'
        placeholder='Наприклад: Online'
        minLength={2}
        maxLength={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Категорія повиненна містити мінімум 2 символи, а максимально 10 символів.</p>
      <button onClick={onClickAdd}>Додати формат</button>
    </div>
  );
};

export default AddFormat;
