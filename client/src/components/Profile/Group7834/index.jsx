import React from "react";
import "./Group7834.css";

function Group7834(props) {
  const { number, className } = props;

  return (
    <div className={`group-7834 ${className || ""}`}>
      <div className="available-pack poppins-medium-white-10px">Available pack :</div>
      <div className="number-9 poppins-light-white-10px">{number}</div>
    </div>
  );
}

export default Group7834;
