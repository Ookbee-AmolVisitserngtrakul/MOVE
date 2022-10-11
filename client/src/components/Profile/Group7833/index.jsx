import React from "react";
import "./Group7833.css";

function Group7833(props) {
  const { number, className } = props;

  return (
    <div className={`group-7833 ${className || ""}`}>
      <div className="min-loop-1 poppins-medium-white-10px">Min./Loop :</div>
      <div className="number-12 poppins-light-white-10px">{number}</div>
    </div>
  );
}

export default Group7833;
