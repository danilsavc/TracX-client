import React from "react";

const EmptyCalendar = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    width: "100%",
    textAlign: "center",
    paddingTop: "20vh",
  };

  const textStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };

  const smileyStyles = {
    fontSize: "60px",
    marginBottom: "16px",
  };

  return (
    <div style={containerStyles}>
      <span style={smileyStyles}>😢</span>
      <p style={textStyles}>Ви ще не записалися на жодну подію</p>
    </div>
  );
};

export default EmptyCalendar;
