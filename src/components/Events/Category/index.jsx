import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  resetFilters,
  setCurentCategory,
  setCurentCategoryId,
} from "../../../Redux/slices/filter";

import styles from "./Category.module.scss";
import down from "../../../Assets/img/down.svg";
import { setCurrentPage } from "../../../Redux/slices/events";

const Category = () => {
  const dispatch = useDispatch();
  const { category, status, currentCategory } = useSelector((state) => state.filter);
  const allItems = ["Категорія"];
  const items =
    status === "loaded" && category
      ? [...allItems, ...category.map((categoryName) => categoryName.name)]
      : allItems;

  const [clickMainBlock, setClickMainBlock] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchCategory());
    dispatch(resetFilters());
  }, [dispatch]);

  React.useEffect(() => {
    const onClickWindow = (e) => {
      if (e.target.closest(`.${styles.items}`) || e.target.closest(`.${styles.mainBlock}`)) {
        return;
      }

      setClickMainBlock(false);
    };

    if (clickMainBlock) {
      window.addEventListener("click", onClickWindow);
    } else {
      window.removeEventListener("click", onClickWindow);
    }

    return () => window.removeEventListener("click", onClickWindow);
  }, [clickMainBlock]);

  const onClickMainBlock = () => {
    setClickMainBlock(!clickMainBlock);
  };

  const onClickCategory = (categoryName, index) => {
    const categoryId = status === "loaded" && category ? category[index - 1]?.id : 0;
    dispatch(setCurentCategory(categoryName));
    dispatch(setCurentCategoryId(categoryId));
    dispatch(setCurrentPage(1));
    setClickMainBlock(false);
  };

  return (
    <div className={styles.category}>
      <div className={styles.content}>
        <div onClick={onClickMainBlock} className={styles.mainBlock}>
          <span>{currentCategory}</span>
          <img src={down} alt='down' className={clickMainBlock ? styles.imgClick : ""} />
        </div>
        <div
          className={styles.items}
          style={clickMainBlock ? { display: "block" } : { display: "none" }}
        >
          {items.map((categoryName, index) => (
            <div
              key={index}
              className={styles.categoryItem}
              onClick={() => onClickCategory(categoryName, index)}
            >
              <span>{categoryName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
