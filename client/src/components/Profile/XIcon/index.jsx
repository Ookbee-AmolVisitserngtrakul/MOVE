import React from "react";
import "./XIcon.css";

function XIcon(props) {
  const { className, onClick } = props;

  return (
    <div className={`x_icon ${className || ""}`} onClick={onClick}>
      <img className="union" src="/img/union@2x.svg" alt="Union" />
    </div>
  );
}

export default XIcon;
