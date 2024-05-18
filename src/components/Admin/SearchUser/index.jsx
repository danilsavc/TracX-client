import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchUser } from "../../../Redux/slices/searchUser";

import style from "./SearchUser.module.scss";
import { fetchAllRoles, fetchUserRole } from "./../../../Redux/slices/roles";
import ThreeDots from "../../Skeletons/ThreeDots";

const SearchUser = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.searchUser);
  const { roles, status: status_roles } = useSelector((state) => state.roles);
  const [selectedRole, setSelectedRole] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const onClickSearchUser = () => {
    dispatch(fetchSearchUser({ email: userEmail }));
    setUserEmail("");
  };

  const onClickSetRole = () => {
    dispatch(fetchUserRole({ email: data.email, roleId: selectedRole })).then(() => {
      dispatch(fetchSearchUser({ email: data.email }));
    });
  };

  React.useEffect(() => {
    dispatch(fetchAllRoles());
  }, [dispatch]);

  return (
    <div className={style.box}>
      <input
        type='email'
        placeholder='Наприклад: user@user.com'
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <p>Введіть електронну адресу користувача у форматі user@user.com</p>
      <button onClick={onClickSearchUser}>Знайти користувача</button>

      <div className={style.container}>
        {status === "loaded" ? (
          <div className={style.user}>
            <h3>Знайдений користувач</h3>
            <span className={style.email}>Пошта користувача: {data.email}</span>
            <div className={style.userRole}>
              <span>Ролі користувача: </span>
              {data.roleName.map((item, index) => (
                <span className={style.oneRole} key={index}>
                  - {item}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p>Користувач не знайден</p>
        )}

        <div className={style.roles}>
          <h3>Доступні ролі</h3>
          {status_roles === "loaded" ? (
            roles.map((role, index) => (
              <div key={index} className={style.role}>
                <input
                  type='radio'
                  value={role.id}
                  checked={selectedRole === role.id}
                  onChange={() => handleRoleChange(role.id)}
                />
                <label>{role.name}</label>
              </div>
            ))
          ) : (
            <ThreeDots />
          )}

          <button onClick={onClickSetRole}>Присвоїти роль</button>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
