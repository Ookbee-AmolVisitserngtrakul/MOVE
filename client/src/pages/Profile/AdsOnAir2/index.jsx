import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Group7953 from "../../../components/Profile/Group7953";
import "./AdsOnAir2.css";

function AdsOnAir2(props) {
  const { moveCom, parcParagonThe9, addressChaturathit, text14, preview, onair } = props;

  return (
    <div className="container-center-horizontal">
      <div className="ads-on-air-2 screen">
        <div className="group-7781-10">
          <Group7782 />
          <div className="rectangle-2394-10"></div>
        </div>
        <div className="overlap-group5-6">
          <div className="rectangle-2463-8"></div>
          <div className="ellipse-container-6">
            <div className="ellipse-441-6"></div>
            <div className="ellipse-442-6"></div>
          </div>
          <div className="rectangle-2396-8"></div>
          <div className="rectangle-2448-7"></div>
          <div className="movecom-8 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="parc-paragon-the-9-10 poppins-bold-white-24px">{parcParagonThe9}</div>
          <p className="address-chaturathit-3 poppins-light-white-8px">{addressChaturathit}</p>
          <img className="group-7629-3" src="/img/group-7629-3@2x.svg" alt="Group 7629" />
          <div className="text-14 poppins-medium-white-16px">{text14}</div>
          <div className="preview-3 poppins-bold-white-16px">{preview}</div>
          <img className="mask-group-29" src="/img/mask-group-23@2x.svg" alt="Mask group" />
          <div className="group-7951-9"></div>
          <Group7953 />
          <div className="overlap-group4-11">
            <div className="overlap-group-37">
              <img className="group-7761-2" src="/img/group-7761-3@2x.svg" alt="Group 7761" />
            </div>
            <div className="onair-1 poppins-medium-tory-blue-12px">{onair}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdsOnAir2;
