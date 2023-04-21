import React from "react";

import styles from "./Category.module.scss";
import down from "../../../Assets/img/down.svg";

const Category = () => {
  const items = [
    "Всі",
    "PHP",
    "JavaScript",
    "Java",
    ".Net",
    "Architecture",
    "PM",
    "Business",
    "Data Science",
    "Python",
  ];

  const [clickMainBlock, setClickMainBlock] = React.useState(false);
  const [category, setCategory] = React.useState("Всі");

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

  const onClickCategory = (categoryName) => {
    setCategory(categoryName);
    setClickMainBlock(false);
  };

  return (
    <div className={styles.category}>
      <div className={styles.content}>
        <div onClick={onClickMainBlock} className={styles.mainBlock}>
          <span>{category}</span>
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
              onClick={() => onClickCategory(categoryName)}
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
