import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, logout } from "../../../Redux/slices/auth";
import style from "./Information.module.scss";
import { useNavigate } from "react-router-dom";
import ThreeDots from "../../Skeletons/ThreeDots";

const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.auth) || "";
  const isLoading = status === "loaded" && data;

  const onClickLogout = () => {
    if (window.confirm("Ви впевнені, що хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/");
    }
  };

  React.useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={style.information}>
        <div className={style.block}>
          <span className={style.title}>Ім'я</span>
          <span className={style.content}>{data.name}</span>
        </div>
        <div className={style.block}>
          <span className={style.title}>Прізвище</span>
          <span className={style.content}>{data.surname}</span>
        </div>
        <div className={style.block}>
          <span className={style.title}>Пошта</span>
          <span className={style.content}>{data.email}</span>
        </div>

        <button onClick={onClickLogout}>Вийти з аккаунта</button>
      </div>
    );
  } else {
    return <ThreeDots />;
  }
};

export default Information;
