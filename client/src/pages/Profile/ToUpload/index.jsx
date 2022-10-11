import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Frame7827 from "../../../components/Profile/Frame7827";
import Frame7825 from "../../../components/Profile/Frame7825";
import Group7802 from "../../../components/Profile/Group7802";
import "./ToUpload.css";
import { useNavigate } from "react-router-dom";

function ToUpload(props) {
  const {
    moveCom,
    type1ParcParagon,
    huaiKhwangBangkok1,
    bookingDate1,
    place1,
    date1,
    end1,
    date2,
    uploadMedia1,
    bookingDate2,
    place2,
    date3,
    end2,
    date4,
    type2ParcParagon,
    huaiKhwangBangkok2,
    arrowLeftLine,
    spanText1,
    spanText2,
    uploadMedia2,
    frame7827Props,
    frame7825Props,
    group7802Props,
  } = props;
  const navigate = useNavigate();

  function uploadArtwork() {
    navigate("/upload-artwork-1")
  }

  function backToProfile() {
    navigate("/profile")
  }

  return (
    <div className="container-center-horizontal">
      <div className="to-upload-2 screen">
        <div className="group-7781-4">
          <Group7782 />
          <div className="rectangle-2394-4"></div>
        </div>
        <div className="overlap-group4-6">
          <div className="rectangle-2463-2"></div>
          <div className="rectangle-2396-2"></div>
          <div className="rectangle-2448-2"></div>
          <div className="movecom-2 sfpro-regular-normal-white-16px">{moveCom}</div>
          <img className="mask-group-23" src="/img/mask-group-8@2x.svg" alt="Mask group" />
          <p className="type-1-parc-paragon-1 poppins-normal-white-16px">{type1ParcParagon}</p>
          <div className="group-7867">
            <img className="group-7742-2" src="/img/group-7742@2x.svg" alt="Group 7742" />
            <div className="huai-khwang-bangkok-2 poppins-light-white-8px">{huaiKhwangBangkok1}</div>
          </div>
          <Frame7827
            group7832Props={frame7827Props.group7832Props}
            group7834Props={frame7827Props.group7834Props}
            group7833Props={frame7827Props.group7833Props}
          />
          <div className="booking-date-2 poppins-medium-white-10px">{bookingDate1}</div>
          <div className="overlap-group1-9">
            <div className="rectangle-2480-1"></div>
            <div className="place-22 poppins-medium-black-10px">{place1}</div>
            <div className="date-29 poppins-semi-bold-black-16px">{date1}</div>
            <div className="end-2 poppins-medium-black-10px">{end1}</div>
            <div className="date-30 poppins-semi-bold-black-16px">{date2}</div>
            <img className="line-628-1" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <div className="overlap-group-31" onClick={uploadArtwork}>
            <div className="upload-media-2 poppins-medium-black-16px">{uploadMedia1}</div>
          </div>
          <div className="booking-date-3 poppins-medium-white-10px">{bookingDate2}</div>
          <div className="overlap-group2-7">
            <div className="rectangle-2480-1"></div>
            <div className="place-22 poppins-medium-black-10px">{place2}</div>
            <div className="date-29 poppins-semi-bold-black-16px">{date3}</div>
            <div className="end-3 poppins-medium-black-10px">{end2}</div>
            <div className="date-30 poppins-semi-bold-black-16px">{date4}</div>
            <img className="line-628-1" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <img className="mask-group-24" src="/img/mask-group-9@2x.svg" alt="Mask group" />
          <p className="type-2-parc-paragon-1 poppins-normal-white-16px">{type2ParcParagon}</p>
          <div className="huai-khwang-bangkok-3 poppins-light-white-8px">{huaiKhwangBangkok2}</div>
          <img className="group-7742-3" src="/img/group-7742-2@2x.svg" alt="Group 7742" />
          <Frame7825
            className={frame7825Props.className}
            group7832Props={frame7825Props.group7832Props}
            group7834Props={frame7825Props.group7834Props}
            group7833Props={frame7825Props.group7833Props}
          />
          <img className="vector-23" src="/img/vector-9@2x.svg" alt="Vector" />
          <div className="group-7995-1">
            <img className="arrow-left-line-2" src={arrowLeftLine} alt="arrow-left-line" onClick={backToProfile} />
            <div className="to-upload-3 poppins-bold-white-24px-2">
              <span className="poppins-bold-white-24px">{spanText1}</span>
              <span className="poppins-bold-shocking-pink-24px">{spanText2}</span>
            </div>
          </div>
          <div className="overlap-group3-6">
            <div className="upload-media-2 poppins-medium-black-16px">{uploadMedia2}</div>
          </div>
          <Group7802 className={group7802Props.className} />
        </div>
      </div>
    </div>
  );
}

export default ToUpload;
