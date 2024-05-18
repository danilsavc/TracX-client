import React from "react";

import style from "./Contacts.module.scss";

import teamInf from "../../Assets/teamInfo.json";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <h1>З TracX не пропусти жодної IT події - трекуй з нами!</h1>
      <div className={style.inform}>
        <h2>Контактна інформація</h2>
        <div className={style.adress}>
          <h3>Електронна пошта</h3>
          <h3>Адреса</h3>
          <h3>Facebook</h3>
          <a href='mailto: tracx@gmail.com'>tracx@gmail.com</a>
          <a
            href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D1%8F+%D0%A2%D0%B8%D1%85%D0%BE%D0%B3%D0%BE,+42%D0%90,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.449682,30.4404253,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cc2493278ae1:0xe9bcc47a6f636d26!8m2!3d50.449682!4d30.442614'
            target='_blank'
            rel='noopener noreferrer'
          >
            Київ, вул. Олекси Тихого, 42а
          </a>
          <a href='https://uk-ua.facebook.com/'>TracX</a>
        </div>
      </div>

      <div className={style.org}>
        <h3>Організатори:</h3>
        <div className={style.org__contant}>
          {teamInf.map((item, index) => (
            <div key={index} className={style.items}>
              <p className={style.title}>{item.title}</p>
              <img src={item.img} alt='img' />
              <p className={style.name}>{item.name}</p>
              <p className={style.number}>{item.phone}</p>
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
