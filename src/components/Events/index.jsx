import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";
import { fetchEvents, setCurrentPage } from "../../Redux/slices/events";

import style from "./Events.module.scss";
import OneEvent from "./OneEvent";
import Category from "./Category";
import Format from "./Format";
import { getFormatNameById } from "../../utils/formatUtils";
import EventsSkeleton from "../Skeletons/EventsSkeleton";
import Pagination from "../Pagination";

const Events = () => {
  const dispatch = useDispatch();
  const { currentCategoryId, currentFormatId } = useSelector((state) => state.filter);
  const { items, status, countPage, currentPage } = useSelector((state) => state.events);
  const { format } = useSelector((state) => state.filter);

  const isLoading = status === "loading";

  const getFormat = (formats, formatId) => {
    const formatName = getFormatNameById(formats, formatId);
    return formatName ? formatName : "Невідомий";
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      fetchEvents({
        currentFormatId,
        currentCategoryId,
        currentPage,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFormatId, currentCategoryId, currentPage]);

  return (
    <div className={style.events}>
      <h1>IT івенти</h1>
      <div className={style.filter}>
        <Category />
        <Format />
      </div>

      <div className={style.items}>
        {(isLoading ? [...Array(6)] : items.events.rows).map((item, index) =>
          isLoading ? (
            <EventsSkeleton key={index} />
          ) : (
            <OneEvent
              title={item.title}
              data={formatDate(item.data)}
              format={getFormat(format, item.formatId)}
              descriptions={item.descriptions}
              bcgColor={item.bcgColor}
              key={index}
            />
          )
        )}
      </div>

      <div className={style.pagination}>
        <Pagination countPage={countPage} currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default Events;
