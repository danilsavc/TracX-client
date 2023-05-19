import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "./Registration.module.scss";
import { fetchRegister } from "../../../Redux/slices/auth";
import { closeModal } from "../../../Redux/slices/modal";

const Registration = ({ setReg }) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const isLoading = status === "loaded";

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(fetchRegister(values));

      resetForm();
    },
  });

  React.useEffect(() => {
    if (isLoading) {
      dispatch(closeModal());
      navigate("/");
    } else if (!Array.isArray(error) && error) {
      window.alert(error);
    }
  }, [isLoading, error, dispatch, navigate]);

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
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
            {Array.isArray(error) ? (
              <span className={style.errorActive}>
                {error.filter((error) => error.path === "name")[0]?.msg ?? ""}
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
            {Array.isArray(error) ? (
              <span className={style.errorActive}>
                {error.filter((error) => error.path === "surname")[0]?.msg + " *" ?? ""}
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
            {Array.isArray(error) ? (
              <span className={style.errorActive}>
                {error.filter((error) => error.path === "email")[0]?.msg + " *" ?? ""}
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
            {Array.isArray(error) ? (
              <span className={style.errorActive}>
                {error.filter((error) => error.path === "password")[0]?.msg + " *" ?? ""}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <button type='submit'>Зареєструватися</button>

        <p onClick={() => setReg(true)}>Увійти в особистий кабінет</p>
      </div>
    </form>
  );
};

export default Registration;
