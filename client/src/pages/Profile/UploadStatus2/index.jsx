import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Group7944 from "../../../components/Profile/Group7944";
import Group7953 from "../../../components/Profile/Group7953";
import Group7802 from "../../../components/Profile/Group7802";
import "./UploadStatus2.css";

function UploadStatus2(props) {
  const {
    moveCom,
    parcParagonThe9,
    addressChaturathit,
    checking,
    text12,
    preview,
    group7944Props,
    group7802Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="upload-status-2 screen">
        <div className="group-7781-8">
          <Group7782 />
          <div className="rectangle-2394-8"></div>
        </div>
        <div className="overlap-group4-9">
          <div className="rectangle-2463-6"></div>
          <div className="ellipse-container-4">
            <div className="ellipse-441-4"></div>
            <div className="ellipse-442-4"></div>
          </div>
          <div className="rectangle-2396-6"></div>
          <div className="rectangle-2448-5"></div>
          <div className="movecom-6 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="parc-paragon-the-9-8 poppins-bold-white-24px">{parcParagonThe9}</div>
          <div className="group-7730-1">
            <img className="group-7629-1" src="/img/group-7629-1@2x.svg" alt="Group 7629" />
            <p className="address-chaturathit-1 poppins-light-white-8px">{addressChaturathit}</p>
          </div>
          <div className="overlap-group2-11">
            <Group7944 className={group7944Props.className} />
            <div className="checking-1 poppins-medium-yellow-sea-12px">{checking}</div>
            <img className="icon-clock-1" src="/img/history-1@2x.svg" alt="icon-clock" />
          </div>
          <div className="text-12 poppins-medium-white-16px">{text12}</div>
          <div className="preview-1 poppins-bold-white-16px">{preview}</div>
          <img className="mask-group-27" src="/img/mask-group-19@2x.svg" alt="Mask group" />
          <div className="group-7951-4"></div>
          <Group7953 />
          {/* <Group7802 className={group7802Props.className} /> */}
        </div>
      </div>
    </div>
  );
}

export default UploadStatus2;
