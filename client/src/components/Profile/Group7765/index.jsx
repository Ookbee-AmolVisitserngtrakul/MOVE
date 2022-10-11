import React from "react";
import "./Group7765.css";

function Group7765(props) {
  const { className, onClick } = props;

  return (
    <div className={`group-7765 ${className || ""}`} onClick={onClick}>
      <img className="icon-upload_arrow" src="/img/frame-3@2x.svg" alt="icon-upload_arrow" />
    </div>
  );
}

export default Group7765;
