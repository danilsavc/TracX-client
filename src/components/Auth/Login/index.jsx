import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss";
import { fetchLogin } from "../../../Redux/slices/auth";
import { closeModal } from "../../../Redux/slices/modal";

const Login = ({ setReg }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const isLoading = status === "loaded";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(fetchLogin(values));
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

        <button type='submit'>Увійти</button>
        <p onClick={() => setReg(false)}>Зареєструватися</p>
      </div>
    </form>
  );
};

export default Login;
