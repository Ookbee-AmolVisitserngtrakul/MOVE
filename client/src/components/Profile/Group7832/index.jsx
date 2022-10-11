import React from "react";
import "./Group7832.css";

function Group7832(props) {
  const { address, className } = props;

  return (
    <div className={`group-7832 ${className || ""}`}>
      <div className="quantity poppins-medium-white-10px">Quantity :</div>
      <div className="address-3 poppins-light-white-10px">{address}</div>
    </div>
  );
}

export default Group7832;
