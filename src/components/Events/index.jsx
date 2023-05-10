import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";
import { fetchEvents } from "../../Redux/slices/events";

import style from "./Events.module.scss";
import OneEvent from "./OneEvent";
import Category from "./Category";
import Format from "./Format";
import { getFormatNameById } from "../../utils/formatUtils";
import EventsSkeleton from "../Skeletons/EventsSkeleton";

const Events = () => {
  const dispatch = useDispatch();
  const { currentCategoryId, currentFormatId } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.events);
  const { format } = useSelector((state) => state.filter);

  const isLoading = status === "loading";

  const getFormat = (formats, formatId) => {
    const formatName = getFormatNameById(formats, formatId);
    return formatName ? formatName : "Невідомий";
  };

  React.useEffect(() => {
    dispatch(
      fetchEvents({
        currentFormatId,
        currentCategoryId,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFormatId, currentCategoryId]);

  return (
    <div className={style.events}>
      <h1>IT івенти</h1>
      <div className={style.filter}>
        <Category />
        <Format />
      </div>

      <div className={style.items}>
        {(isLoading ? [...Array(6)] : items.rows).map((item, index) =>
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
    </div>
  );
};

export default Events;
