import React from "react";
import style from "./Info.module.scss";

const Info = ({ info, setInfo }) => {
  const handleAddEvent = () => {
    if (info.length === 0 || (info.length > 0 && info[info.length - 1].title !== "")) {
      setInfo([...info, { title: "", description: "" }]);
    }
  };

  const handleRemoveEvent = (index) => {
    const updatedEvents = [...info];
    updatedEvents.splice(index, 1);
    setInfo(updatedEvents);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEvents = [...info];
    if (!updatedEvents[index]) {
      updatedEvents[index] = { title: "", description: "" };
    }
    updatedEvents[index][field] = value;
    setInfo(updatedEvents);
  };

  return (
    <div className={style.box}>
      <p>Введіть заголовок і текст додаткової інформації</p>

      <div className={style.items}>
        {info.map((event, index) => (
          <div className={style.container} key={index}>
            <input
              type='text'
              placeholder='Наприклад: Аудиторія'
              minLength={3}
              maxLength={30}
              value={event.title}
              onChange={(e) => handleInputChange(index, "title", e.target.value)}
              required
            />
            <textarea
              placeholder='Наприклад: ця подія розрахована на людей у яких є базові знання з React'
              value={event.description}
              onChange={(e) => handleInputChange(index, "description", e.target.value)}
              required
            ></textarea>
            {info.length > 0 && <button onClick={() => handleRemoveEvent(index)}>Видалити</button>}
          </div>
        ))}
      </div>

      <button onClick={handleAddEvent}>Додати додаткову інформацію</button>
    </div>
  );
};

export default Info;
