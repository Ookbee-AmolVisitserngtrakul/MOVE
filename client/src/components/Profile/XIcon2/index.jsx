import React from "react";
import "./XIcon2.css";

function XIcon2(props) {
  const { className } = props;

  return (
    <div className={`x_icon-4 ${className || ""}`}>
      <img className="union-4" src="/img/union-2@2x.svg" alt="Union" />
    </div>
  );
}

export default XIcon2;
