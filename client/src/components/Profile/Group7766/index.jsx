import React from "react";
import "./Group7766.css";

function Group7766(props) {
  const { className, onClick } = props;

  return (
    <div className={`group-7766 ${className || ""}`} onClick={onClick}>
      <img className="frame-5" src="/img/frame-4@2x.svg" alt="Frame" />
    </div>
  );
}

export default Group7766;
