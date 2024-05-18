import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Swal from "sweetalert2";
import style from "./CreateEvent.module.scss";
import Color from "./Color";
import FormatModer from "./FormatModer";
import CategoryModer from "./CategoryModer";
import Tags from "./Tags/index";
import Info from "./Info";
import { converData } from "../../../utils/convertData";
import { fetchNewEvent } from "../../../http/fetchNewEvent";
import { resetFilters } from "../../../Redux/slices/filter";

const colors = ["#9c6fe2", "#273da4", "#1da551", "#e38800", "#d062d1", "#e44a59"];

const CreateEvent = () => {
  const dispatch = useDispatch();
  const { currentFormatId, currentCategoryId } = useSelector((state) => state.filter);

  const [price, setPrice] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [tags, setTags] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [data, setData] = React.useState("");

  const onClickAdd = () => {
    if (
      title.trim() === "" ||
      subtitle.trim() === "" ||
      currentFormatId === null ||
      currentCategoryId === null ||
      data.trim() === "" ||
      info.length === 0 ||
      tags.length === 0
    ) {
      Swal.fire("Будь ласка, заповніть усі обов'язкові поля");
      return;
    } else {
      fetchNewEvent({
        title: title,
        descriptions: subtitle,
        data: converData(data),
        price: price,
        tags: tags,
        bcgColor: selectedColor,
        categoryId: currentCategoryId,
        formatId: currentFormatId,
        info: info,
      })
        .then(() => {
          dispatch(resetFilters());
          setTitle("");
          setSubtitle("");
          setData("");
          setPrice(0);
          setTags([]);
          setInfo([]);
        })
        .then(() => Swal.fire("Подія успішно була додана"));
    }
  };

  return (
    <div className={style.box}>
      <div className={style.title}>
        <p>Введіть заголовок, він повинен містити мінімум 2 символи, а максимально 25 символів</p>
        <input
          type='text'
          placeholder='Наприклад: React для новачків'
          minLength={2}
          maxLength={25}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={style.subtitle}>
        <p>Введіть опис, він повинен містити мінімум 3 символи, а максимально 70 </p>
        <textarea
          placeholder='Наприклад: Ти навчишся створювати вебсайти'
          minLength={3}
          maxLength={70}
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </div>

      <div className={style.filters}>
        <p>Оберіть категорію і формат події</p>
        <div className={style.filters__content}>
          <FormatModer />
          <CategoryModer />
        </div>
      </div>

      <div className={style.date}>
        <p>Оберіть дату та час проведення події</p>
        <input type='datetime-local' value={data} onChange={(e) => setData(e.target.value)} />
      </div>

      <div className={style.price}>
        <p>Ціна повинна бути від 0 до 9999</p>
        <span>{price}</span>
        <input
          type='range'
          min={0}
          max={9900}
          step={100}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>

      <div className={style.tags}>
        <Tags tags={tags} setTags={setTags} />
      </div>

      <div className={style.param}>
        <Color colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>

      <div className={style.info}>
        <Info info={info} setInfo={setInfo} />
      </div>
      <button className={style.btn} onClick={onClickAdd}>
        Додати подію
      </button>
    </div>
  );
};

export default CreateEvent;
