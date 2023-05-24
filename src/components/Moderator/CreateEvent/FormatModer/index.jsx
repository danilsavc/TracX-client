import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./FormatModer.module.scss";
import down from "../../../../Assets/img/down.svg";
import { fetchFormat, setCurentFormat, setCurentFormatId } from "../../../../Redux/slices/filter";
import { setCurrentPage } from "../../../../Redux/slices/events";

const FormatModer = () => {
  const dispatch = useDispatch();
  const { format, status, currentFormat } = useSelector((state) => state.filter);
  const allItems = ["Формат"];
  const items =
    status === "loaded" && format
      ? [...allItems, ...format.map((formatName) => formatName.name)]
      : allItems;

  const [clickMainBlock, setClickMainBlock] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchFormat());
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

  const onClickCategory = (formatName, index) => {
    dispatch(setCurentFormat(formatName));
    dispatch(setCurentFormatId(index));
    dispatch(setCurrentPage(1));
    setClickMainBlock(false);
  };

  return (
    <div className={styles.format}>
      <div className={styles.content}>
        <div onClick={onClickMainBlock} className={styles.mainBlock}>
          <span>{currentFormat}</span>
          <img src={down} alt='down' className={clickMainBlock ? styles.imgClick : ""} />
        </div>
        <div
          className={styles.items}
          style={clickMainBlock ? { display: "block" } : { display: "none" }}
        >
          {items.map((formatName, index) => (
            <div
              key={index}
              className={styles.formatItem}
              onClick={() => onClickCategory(formatName, index)}
            >
              <span>{formatName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormatModer;
