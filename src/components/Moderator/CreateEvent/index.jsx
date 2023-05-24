import React from "react";
// import { useSelector } from "react-redux";

import style from "./CreateEvent.module.scss";
import Color from "./Color";
import FormatModer from "./FormatModer";
import CategoryModer from "./CategoryModer";
import Tags from "./Tags/index";

const colors = ["#9c6fe2", "#273da4", "#1da551", "#e38800", "#d062d1", "#e44a59"];

const CreateEvent = () => {
  const [price, setPrice] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [tags, setTags] = React.useState([]);
  // const { currentFormatId } = useSelector((state) => state.filter);

  return (
    <div className={style.box}>
      <div className={style.title}>
        <p>Введіть заголовок, він повинен містити мінімум 2 символи, а максимально 25 символів</p>
        <input
          type='text'
          placeholder='Наприклад: React для новачків'
          minLength={2}
          maxLength={25}
        />
      </div>

      <div className={style.subtitle}>
        <p>Введіть опис, він повинен містити мінімум 3 символи, а максимально 70 </p>
        <textarea
          placeholder='Наприклад: Ти навчишся створювати вебсайти'
          minLength={3}
          maxLength={70}
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
        <input type='datetime-local' />
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
    </div>
  );
};

export default CreateEvent;
