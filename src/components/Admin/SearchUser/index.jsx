import React from "react";

import style from "./SearchUser.module.scss";

const SearchUser = () => {
  const [selectedRole, setSelectedRole] = React.useState("");

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className={style.box}>
      <input type='email' placeholder='Наприклад: user@user.com' />
      <p>Введіть електронну адресу користувача у форматі user@user.com</p>
      <button>Знайти користувача</button>

      <div className={style.container}>
        <div className={style.user}>
          <h3>Знайдений користувач</h3>
          <span className={style.email}>email@gmail.com</span>
          <span className={style.userRole}>Admin</span>
        </div>

        <div className={style.roles}>
          <h3>Доступні ролі</h3>
          <div className={style.role}>
            <input
              type='radio'
              value='Модератор'
              checked={selectedRole === "Модератор"}
              onChange={() => handleRoleChange("Модератор")}
            />
            <label htmlFor='moderator'>Модератор</label>
          </div>
          <div className={style.role}>
            <input
              type='radio'
              value='Адмін'
              checked={selectedRole === "Адмін"}
              onChange={() => handleRoleChange("Адмін")}
            />
            <label htmlFor='Адмін'>Адмін</label>
          </div>
          <div className={style.role}>
            <input
              type='radio'
              value='Юзер'
              checked={selectedRole === "Юзер"}
              onChange={() => handleRoleChange("Юзер")}
            />
            <label htmlFor='Юзер'>Юзер</label>
          </div>

          <button>Присвоїти роль</button>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
