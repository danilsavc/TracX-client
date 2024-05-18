import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss";
import { fetchLogin, resetData } from "../../../Redux/slices/auth";
import { closeModal } from "../../../Redux/slices/modal";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setReg }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, badReq } = useSelector((state) => state.auth);

  const isLoading = status === "loaded";

  const OnClicksetReg = () => {
    setReg(false);
    dispatch(resetData());
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(fetchLogin(values));
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
        <h3>Увійти в особистий кабінет</h3>
        <div className={style.content}>
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

        <button type='submit'>Увійти</button>
        <p onClick={OnClicksetReg}>Зареєструватися</p>
      </div>
    </form>
  );
};

export default Login;
