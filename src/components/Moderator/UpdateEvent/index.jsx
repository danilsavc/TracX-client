import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./UpdateEvent.module.scss";
import { fetchModerEvents, setCurrentPage } from "../../../Redux/slices/moderEvents";
import OneModerEvent from "./OneModerEvent";
import ThreeDots from "../../Skeletons/ThreeDots";
import formatDate from "../../../utils/formatDate";
import { getFormatNameById } from "../../../utils/formatUtils";
import Pagination from "../../Pagination";

const UpdateEvent = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.auth);
  const {
    items,
    status: moder_status,
    currentPage,
    countPage,
    status_delete,
  } = useSelector((state) => state.moderEvents);
  const { format } = useSelector((state) => state.filter);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    if (status === "loaded") {
      dispatch(fetchModerEvents({ currentPage: currentPage, userId: data.id }));
    }
  }, [dispatch, status, data, currentPage, status_delete]);

  return (
    <div className={style.box}>
      <div className={style.container}>
        {moder_status === "loaded" ? (
          items.events.rows.map((item, index) => (
            <OneModerEvent
              title={item.title}
              data={formatDate(item.data)}
              format={getFormatNameById(format, item.formatId)}
              descriptions={item.descriptions}
              bcgColor={item.bcgColor}
              id={item.id}
              key={index}
            />
          ))
        ) : (
          <ThreeDots />
        )}
      </div>

      <div className={style.pagination}>
        <Pagination countPage={countPage} currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default UpdateEvent;
