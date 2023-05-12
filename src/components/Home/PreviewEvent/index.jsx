import React from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./PreviewEvent.module.scss";
import OneEvent from "../../Events/OneEvent";
import { NavLink } from "react-router-dom";
import { fetchEvents } from "../../../Redux/slices/events";
import formatDate from "../../../utils/formatDate";
import { getFormatNameById } from "../../../utils/formatUtils";
import EventsSkeleton from "../../Skeletons/EventsSkeleton";
import { fetchFormat } from "../../../Redux/slices/filter";

const PreviewEvents = () => {
  const dispatch = useDispatch();
  const { items, status, currentPage } = useSelector((state) => state.events);
  const { currentCategoryId, currentFormatId, format } = useSelector((state) => state.filter);
  const isLoading = status === "loading";

  React.useEffect(() => {
    dispatch(fetchEvents({ currentCategoryId, currentFormatId, currentPage }));
    dispatch(fetchFormat());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.events}>
      <div className={style.header}>
        <h1>Події</h1>
        <NavLink to='/events'>
          <button>Усі події</button>
        </NavLink>
      </div>

      <div className={style.items}>
        {(isLoading ? [...Array(3)] : items.events.rows.slice(3)).map((item, index) =>
          isLoading ? (
            <EventsSkeleton key={index} />
          ) : (
            <OneEvent
              title={item.title}
              data={formatDate(item.data)}
              format={getFormatNameById(format, item.formatId)}
              descriptions={item.descriptions}
              bcgColor={item.bcgColor}
              id={item.id}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PreviewEvents;
