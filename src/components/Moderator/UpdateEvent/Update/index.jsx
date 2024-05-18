import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Swal from "sweetalert2";
import style from "./Update.module.scss";
import Color from "../../CreateEvent/Color";
import FormatModer from "../../CreateEvent/FormatModer";
import CategoryModer from "../../CreateEvent/CategoryModer";
import Tags from "../../CreateEvent/Tags";
import Info from "../../CreateEvent/Info";
import { converData } from "../../../../utils/convertData";

import {
  resetFilters,
  setCurentCategory,
  setCurentCategoryId,
  setCurentFormat,
  setCurentFormatId,
} from "../../../../Redux/slices/filter";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEvent } from "../../../../http/fetchEvent";
import { useQuery } from "react-query";
import { fetchUpdateEvent } from "../../../../http/fetchUpadateEvent";

const colors = ["#9c6fe2", "#273da4", "#1da551", "#e38800", "#d062d1", "#e44a59"];

const CreateEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentFormatId, currentCategoryId, category, format } = useSelector(
    (state) => state.filter
  );

  const [price, setPrice] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [tags, setTags] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [data, setData] = React.useState("");

  const { data: item, isLoading } = useQuery("event", () => fetchEvent(id), {
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (!isLoading) {
      dispatch(setCurentCategoryId(item.data.categoryId));
      dispatch(setCurentFormatId(item.data.formatId));
      dispatch(
        setCurentCategory(category.find((category) => category.id === item.data.categoryId)?.name)
      );
      dispatch(setCurentFormat(format.find((format) => format.id === item.data.formatId)?.name));
      setTitle(item.data.title);
      setSubtitle(item.data.descriptions);
      setPrice(item.data.price);
      setTags(item.data.tags);
      setInfo(item.data.info);
      setSelectedColor(item.data.bcgColor);
    }
    // eslint-disable-next-line
  }, [isLoading]);

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
      fetchUpdateEvent(id, {
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
        })
        .then(() => Swal.fire("Подія успішно була оновлена"))
        .then(() => {
          navigate("/events");
        });
    }
  };

  return (
    <div className={style.box}>
      <h1>Оновлення події</h1>
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
        Оновити подію
      </button>
    </div>
  );
};

export default CreateEvent;
