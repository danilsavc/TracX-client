import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "./Registration.module.scss";
import { fetchRegister, resetData } from "../../../Redux/slices/auth";
import { closeModal } from "../../../Redux/slices/modal";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = ({ setReg }) => {
  const dispatch = useDispatch();
  const { status, badReq } = useSelector((state) => state.auth);

  const isLoading = status === "loaded";

  const OnClicksetReg = () => {
    setReg(true);
    dispatch(resetData());
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
    },
    onSubmit: (values) => {
      dispatch(fetchRegister(values));
    },
  });

  React.useEffect(() => {
    if (!Array.isArray(badReq) && badReq) {
      toast.error(badReq);
    } else if (isLoading) {
      dispatch(closeModal());
    }
  }, [isLoading, badReq, dispatch, navigate]);

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <ToastContainer />
      <div className={style.login}>
        <h3>Зареєструватися</h3>
        <div className={style.content}>
          <div className={style.content__box}>
            <input
              type='text'
              placeholder="Ім'я"
              name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {Array.isArray(badReq) ? (
              <span className={style.errorActive}>
                {badReq.filter((badReq) => badReq.path === "name")[0]?.msg ?? ""}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className={style.content__box}>
            <input
              type='text'
              placeholder='Прізвище'
              name='surname'
              onChange={formik.handleChange}
              value={formik.values.surname}
              onBlur={formik.handleBlur}
            />
            {Array.isArray(badReq) ? (
              <span className={style.errorActive}>
                {badReq.filter((badReq) => badReq.path === "surname")[0]?.msg ?? ""}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className={style.content__box}>
            <input
              type='email'
              placeholder='Електронна пошта'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {Array.isArray(badReq) ? (
              <span className={style.errorActive}>
                {badReq.filter((badReq) => badReq.path === "email")[0]?.msg ?? ""}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className={style.content__box}>
            <input
              type='password'
              placeholder='Пароль'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {Array.isArray(badReq) ? (
              <span className={style.errorActive}>
                {badReq.filter((badReq) => badReq.path === "password")[0]?.msg ?? ""}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <button type='submit'>Зареєструватися</button>

        <p onClick={OnClicksetReg}>Увійти в особистий кабінет</p>
      </div>
    </form>
  );
};

export default Registration;
