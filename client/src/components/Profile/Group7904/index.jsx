import React from "react";
import "./Group7904.css";

function Group7904(props) {
  const { screenShot20220705At16401, className } = props;

  return (
    <div className={`group-7904 ${className || ""}`}>
      <div className="overlap-group2-3">
        <div className="overlap-group-24">
          <div className="text-11 poppins-medium-white-8px">1/3</div>
        </div>
      </div>
      <div className="screen-shot-at-container">
        <img
          className="screen-shot-2022-07-05-at-1640-3"
          src="/img/screen-shot-2022-07-05-at-16-40-3@2x.png"
          alt="Screen Shot 2022-07-05 at 16.40 3"
        />
        <img
          className="screen-shot-2022-07-05-at-1640-2"
          src="/img/screen-shot-2022-07-05-at-16-40-2@2x.png"
          alt="Screen Shot 2022-07-05 at 16.40 2"
        />
        <img
          className="screen-shot-2022-07-05-at-1640-1"
          src={screenShot20220705At16401}
          alt="Screen Shot 2022-07-05 at 16.40 1"
        />
      </div>
    </div>
  );
}

export default Group7904;
