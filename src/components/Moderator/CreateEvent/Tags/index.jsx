import React, { useState } from "react";
import style from "./Tags.module.scss";

const Tags = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState("");

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleSaveTag = () => {
    if (tagInput.length >= 2) {
      const formattedTag = `#${tagInput.trim()}`;
      setTags([...tags, formattedTag]);
      setTagInput("");
    }
  };

  const handleDeleteTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <div className={style.tag}>
      <p>Додайте теги</p>
      <div className={style.addTag}>
        <input
          type='text'
          value={tagInput}
          onChange={handleInputChange}
          minLength={2}
          maxLength={10}
        />

        <button onClick={handleSaveTag}>Зберегти тег</button>
      </div>

      <div className={style.tagsContainer}>
        {tags.map((tag, index) => (
          <div key={index} className={style.tag}>
            <span>{tag}</span>
            <button onClick={() => handleDeleteTag(index)}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
