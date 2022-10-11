import React from "react";
import "./Group7782.css";

function Group7782(props) {
  const { className } = props;

  return (
    <div className={`group-7782 ${className || ""}`}>
      <div className="place-1 poppins-normal-black-16px">Date</div>
      <div className="overlap-group-3">
        <div className="rectangle-2024"></div>
        <div className="rectangle-2025"></div>
        <div className="date-3 poppins-light-athens-gray-16px">12/06/2022</div>
        <div className="rectangle-2349"></div>
        <div className="search poppins-light-white-16px">Search</div>
        <div className="to poppins-normal-black-16px">To</div>
        <div className="date-4 poppins-light-athens-gray-16px">12/06/2022</div>
      </div>
    </div>
  );
}

export default Group7782;
