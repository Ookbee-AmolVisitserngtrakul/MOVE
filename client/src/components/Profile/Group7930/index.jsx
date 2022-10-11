import React from "react";
import "./Group7930.css";

function Group7930(props) {
  const { cancle, className, uploadMedia, cancel } = props;

  return (
    <div className={`group-7930 ${className || ""}`}>
      <div className="overlap-group-28" onClick={uploadMedia}>
        <div className="upload-media-1 poppins-medium-black-16px">UPLOAD MEDIA</div>
      </div>
      <div className="overlap-group5-1" onClick={cancel}>
        <div className="cancle poppins-medium-white-16px">{cancle}</div>
        <div className="group-7919"></div>
      </div>
    </div>
  );
}

export default Group7930;
