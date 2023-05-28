import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { fetchEvent } from "../../../http/fetchEvent";
import { fetchEventInfo } from "../../../http/fetchEventInfo";
import formatDate from "../../../utils/formatDate";
import { getFormatNameById } from "../../../utils/formatUtils";
import { fetchFormat } from "../../../Redux/slices/filter";
import ThreeDots from "../../Skeletons/ThreeDots";

import styles from "./EventDetails.module.scss";

import logo from "../../../Assets/img/logo.svg";
import Order from "./Order";
import NotFound from "../../NotFound";

const EventDetails = () => {
  const { id } = useParams();
  const { format } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFormat());
  }, [dispatch]);

  let item = [];
  let itemInfo = [];
  const { data, isLoading, isError } = useQuery("event", () => fetchEvent(id), {
    refetchOnWindowFocus: false,
  });

  const {
    data: dataInfo,
    isLoading: isLoadingInfo,
    isError: isErrorInfo,
  } = useQuery("event-info", () => fetchEventInfo(id), {
    refetchOnWindowFocus: false,
  });

  if (isLoading && isLoadingInfo) {
    return (
      <div className={styles.skeleton}>
        <ThreeDots />
      </div>
    );
  } else if (isError || isErrorInfo || !item || !itemInfo) {
    return <NotFound />;
  } else {
    item = data?.data || [];
    itemInfo = dataInfo?.data || [];
  }

  if (isError && isErrorInfo) {
    return <NotFound />;
  }

  const style = {
    backgroundColor: item.bcgColor,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} style={style}>
        <div className={styles.header__box}>
          <h1 className={styles.title}>{item.title}</h1>
          <h2 className={styles.subtitle}>{item.descriptions}</h2>
          <div className={styles.details}>
            <span className={styles.data}>{formatDate(item.data)}</span>
            <span className={styles.format}>{getFormatNameById(format, item.formatId)}</span>
          </div>
          <Link to='order' spy={true} smooth={true} offset={-50} duration={500}>
            <button className={styles.btn}>Записатися</button>
          </Link>
          <div className={styles.logo}>
            <img src={logo} alt='logo' />
            <span>TracX</span>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        {itemInfo &&
          itemInfo.map((info, index) => (
            <div key={index}>
              <h1 style={style}>{info.title}</h1>
              <p>{info.descriptions}</p>
            </div>
          ))}
      </div>

      <div className={styles.tags}>
        <h1 style={style}>Ключові хештеги:</h1>
        {item.tags && item.tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>

      <Order price={item.price} />
    </div>
  );
};

export default EventDetails;
