import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Admin.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategory from "./AddCategory";
import AddFormat from "./AddFormat";
import SearchUser from "./SearchUser";

const Admin = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { status, message, format_status, format_message } = useSelector(
    (state) => state.addFilter
  );
  const { status: status_user, badReq } = useSelector((state) => state.searchUser);
  const { message_userRole, status_userRole } = useSelector((state) => state.roles);

  useEffect(() => {
    if (status === "loaded") {
      toast.success(message);
    } else if (status === "error") {
      toast.error(message);
    }
  }, [status, message]);

  useEffect(() => {
    if (format_status === "loaded") {
      toast.success(format_message);
    } else if (format_status === "error") {
      toast.error(format_message);
    }
  }, [format_status, format_message]);

  useEffect(() => {
    if (status_userRole === "loaded") {
      toast.success(message_userRole);
    } else if (status_userRole === "error") {
      toast.error(message_userRole);
    }
  }, [status_userRole, message_userRole]);

  useEffect(() => {
    if (status_user === "error") {
      toast.error(badReq);
    }
  }, [status_user, badReq]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={style.carouselTabs}>
      <ToastContainer />
      <div className={style.tabButtons}>
        <button
          className={`${style.tabButton} ${activeSlide === 0 ? style.active : ""}`}
          onClick={() => handleSlideChange(0)}
        >
          Додавання категорії
        </button>
        <button
          className={`${style.tabButton} ${activeSlide === 1 ? style.active : ""}`}
          onClick={() => handleSlideChange(1)}
        >
          Додавання формату
        </button>
        <button
          className={`${style.tabButton} ${activeSlide === 2 ? style.active : ""}`}
          onClick={() => handleSlideChange(2)}
        >
          Пошук користувача
        </button>
      </div>
      <Carousel
        selectedItem={activeSlide}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={false}
        showIndicators={false}
      >
        <div>
          <div className={style.slideContent}>
            <h1>Додавання категорії</h1>
            <AddCategory />
          </div>
        </div>
        <div>
          <div className={style.slideContent}>
            <h1>Додавання формату</h1>
            <AddFormat />
          </div>
        </div>
        <div>
          <div className={style.slideContent}>
            <h1>Пошук користувача</h1>
            <SearchUser />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Admin;
