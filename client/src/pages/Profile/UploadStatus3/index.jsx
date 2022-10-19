import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Group7944 from "../../../components/Profile/Group7944";
import Tick from "../../../components/Profile/Tick";
import Group7802 from "../../../components/Profile/Group7802";
import "./UploadStatus3.css";

function UploadStatus3(props) {
  const {
    moveCom,
    parcParagonThe9,
    addressChaturathit,
    text13,
    preview,
    bookingDate,
    place,
    date1,
    end,
    date2,
    march62022,
    uplodeDate,
    quantity,
    availablePack,
    yourArtWorkWill,
    number,
    minLoop,
    x2MinutesPer1AvailablePack,
    address,
    approved,
    group7782Props,
    tickProps,
    group7802Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="upload-status-3 screen">
        <div className="group-7781-9">
          <Group7782 className={group7782Props.className} />
          <div className="rectangle-2394-9"></div>
        </div>
        <div className="overlap-group5-5">
          <div className="rectangle-2463-7"></div>
          <div className="ellipse-container-5">
            <div className="ellipse-441-5"></div>
            <div className="ellipse-442-5"></div>
          </div>
          <div className="rectangle-2396-7"></div>
          <div className="rectangle-2448-6"></div>
          <div className="movecom-7 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="parc-paragon-the-9-9 poppins-bold-white-24px">{parcParagonThe9}</div>
          <p className="address-chaturathit-2 poppins-light-white-8px">{addressChaturathit}</p>
          <img className="group-7629-2" src="/img/group-7629-2@2x.svg" alt="Group 7629" />
          <div className="text-13 poppins-medium-white-16px">{text13}</div>
          <div className="preview-2 poppins-bold-white-16px">{preview}</div>
          <img className="mask-group-28" src="/img/mask-group-21@2x.svg" alt="Mask group" />
          <div className="group-7951-7"></div>
          <div className="group-7953-2">
            <div className="booking-date-15 poppins-medium-white-10px">{bookingDate}</div>
            <div className="group-7952-2">
              <div className="overlap-group-36">
                <div className="rectangle-2480-5"></div>
                <div className="place-26 poppins-medium-black-10px">{place}</div>
                <div className="date-37 poppins-semi-bold-black-16px">{date1}</div>
                <div className="end-8 poppins-medium-black-10px">{end}</div>
                <div className="date-38 poppins-semi-bold-black-16px">{date2}</div>
                <img className="line-628-5" src="/img/line-628@2x.svg" alt="Line 628" />
              </div>
              <div className="overlap-group3-12">
                <div className="group-7951-8">
                  <div className="overlap-group2-14">
                    <div className="march-62022-9 poppins-light-white-10px">{march62022}</div>
                    <div className="uplode-date-9 poppins-medium-white-10px">{uplodeDate}</div>
                  </div>
                  <div className="flex-row-8">
                    <div className="flex-col-28 poppins-medium-white-10px">
                      <div className="flex-col-item-11">{quantity}</div>
                      <div className="flex-col-item-11">{availablePack}</div>
                    </div>
                    <div className="overlap-group1-16 poppins-light-white-10px">
                      <p className="your-art-work-will-3">{yourArtWorkWill}</p>
                      <div className="number-18">{number}</div>
                    </div>
                  </div>
                  <div className="flex-row-9">
                    <div className="min-loop-6 poppins-medium-white-10px">{minLoop}</div>
                    <p className="x2-minutes-per-1-available-pack-3 poppins-light-white-10px">
                      {x2MinutesPer1AvailablePack}
                    </p>
                  </div>
                </div>
                <div className="address-8 poppins-light-white-10px">{address}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group4-10">
            <Group7944 />
            <div className="approved-1 poppins-medium-chateau-green-12px">{approved}</div>
            <Tick className={tickProps.className} />
          </div>
          {/* <Group7802 className={group7802Props.className} /> */}
        </div>
      </div>
    </div>
  );
}

export default UploadStatus3;
