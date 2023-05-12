import React from "react";

const NotFound = () => {
  const style = {
    backgroundColor: "#f6f6f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    gap: "30px",
  };

  return (
    <div style={style}>
      <span>404</span>
      <p>Сторінка не знайдена</p>
    </div>
  );
};

export default NotFound;
