import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";
import { fetchEvents, setCurrentPage } from "../../Redux/slices/events";
import { getFormatNameById } from "../../utils/formatUtils";

import style from "./Events.module.scss";
import OneEvent from "./OneEvent";
import Category from "./Category";
import Format from "./Format";
import EventsSkeleton from "../Skeletons/EventsSkeleton";
import Pagination from "../Pagination";
import search from "../../Assets/img/search.svg";
import cancel from "../../Assets/img/cancel.svg";

const Events = () => {
  const dispatch = useDispatch();
  const { currentCategoryId, currentFormatId } = useSelector((state) => state.filter);
  const { items, status, countPage, currentPage } = useSelector((state) => state.events);
  const { format } = useSelector((state) => state.filter);
  const [searchValue, setSearchValue] = React.useState("");
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
        searchValue,
      })
    );
  }, [currentFormatId, currentCategoryId, currentPage, searchValue, dispatch]);

  const content = (isLoading ? [...Array(6)] : items.events.rows).map((item, index) =>
    isLoading ? (
      <EventsSkeleton key={index} />
    ) : (
      <OneEvent
        title={item.title}
        data={formatDate(item.data)}
        format={getFormat(format, item.formatId)}
        descriptions={item.descriptions}
        bcgColor={item.bcgColor}
        id={item.id}
        key={index}
      />
    )
  );

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={style.events}>
      <h1>IT івенти</h1>
      <div className={style.filter}>
        <Category />
        <Format />
        <div className={style.search}>
          <img className={style.search} src={search} alt='search' />
          <input type='text' placeholder='Пошук...' value={searchValue} onChange={onChangeSearch} />
          {searchValue.length > 0 ? (
            <img
              className={style.cancel}
              src={cancel}
              alt='cancel'
              onClick={() => setSearchValue("")}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={style.items}>{content}</div>

      <div className={style.pagination}>
        <Pagination countPage={countPage} currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default Events;
