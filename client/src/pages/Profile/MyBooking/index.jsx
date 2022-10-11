import { useNavigate } from "react-router-dom";
import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Frame7827 from "../../../components/Profile/Frame7827";
import Group7930 from "../../../components/Profile/Group7930";
import Frame7825 from "../../../components/Profile/Frame7825";
import Group7802 from "../../../components/Profile/Group7802";
import "./MyBooking.css";

function MyBooking(props) {
  const {
    moveCom,
    type1ParcParagon,
    huaiKhwangBangkok1,
    bookingDate1,
    place1,
    date1,
    end1,
    date2,
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
    frame7827Props,
    group79301Props,
    group79302Props,
    frame7825Props,
    group7802Props,
  } = props;
  const navigate = useNavigate();

  function backToProfile () {
    navigate("/profile")
  }

  function uploadArtwork() {
    navigate("/upload-artwork-1")
  }

  function cancel () {
    navigate("/release-to-marketplace-2")
  }

  return (
    <div className="container-center-horizontal">
      <div className="my-booking-2 screen">
        <div className="group-7781-1">
          <Group7782 />
          <div className="rectangle-2394-1"></div>
        </div>
        <div className="overlap-group5-3">
          <div className="rectangle-2463-1"></div>
          <div className="rectangle-2396-1"></div>
          <div className="rectangle-2448-1"></div>
          <div className="movecom-1 sfpro-regular-normal-white-16px">{moveCom}</div>
          <img className="mask-group-21" src="/img/mask-group-11@2x.svg" alt="Mask group" />
          <p className="type-1-parc-paragon poppins-normal-white-16px">{type1ParcParagon}</p>
          <div className="huai-khwang-bangkok poppins-light-white-8px">{huaiKhwangBangkok1}</div>
          <img className="group-7742" src="/img/group-7742@2x.svg" alt="Group 7742" />
          <Frame7827
            group7832Props={frame7827Props.group7832Props}
            group7834Props={frame7827Props.group7834Props}
            group7833Props={frame7827Props.group7833Props}
          />
          <div className="booking-date poppins-medium-white-10px">{bookingDate1}</div>
          <div className="overlap-group1-7">
            <div className="rectangle-2480"></div>
            <div className="place-21 poppins-medium-black-10px">{place1}</div>
            <div className="date-27 poppins-semi-bold-black-16px">{date1}</div>
            <div className="end poppins-medium-black-10px">{end1}</div>
            <div className="date-28 poppins-semi-bold-black-16px">{date2}</div>
            <img className="line-628" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <Group7930 cancle={group79301Props.cancle} className={group79301Props.className} uploadMedia={uploadArtwork} cancel={cancel}/>
          <Group7930 cancle={group79302Props.cancle} className={group79302Props.className} />
          <div className="booking-date-1 poppins-medium-white-10px">{bookingDate2}</div>
          <div className="overlap-group4-5">
            <div className="rectangle-2480"></div>
            <div className="place-21 poppins-medium-black-10px">{place2}</div>
            <div className="date-27 poppins-semi-bold-black-16px">{date3}</div>
            <div className="end-1 poppins-medium-black-10px">{end2}</div>
            <div className="date-28 poppins-semi-bold-black-16px">{date4}</div>
            <img className="line-628" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <img className="mask-group-22" src="/img/mask-group-12@2x.svg" alt="Mask group" />
          <p className="type-2-parc-paragon poppins-normal-white-16px">{type2ParcParagon}</p>
          <div className="huai-khwang-bangkok-1 poppins-light-white-8px">{huaiKhwangBangkok2}</div>
          <img className="group-7742-1" src="/img/group-7742-1@2x.svg" alt="Group 7742" />
          <Frame7825
            group7832Props={frame7825Props.group7832Props}
            group7834Props={frame7825Props.group7834Props}
            group7833Props={frame7825Props.group7833Props}
          />
          <img className="vector-22" src="/img/vector-12@2x.svg" alt="Vector" />
          <div className="group-7995">
            <img className="arrow-left-line-1" src={arrowLeftLine} alt="arrow-left-line" onClick={backToProfile}/>
            <div className="my-booking-3 poppins-bold-white-24px-2">
              <span className="poppins-bold-white-24px">{spanText1}</span>
              <span className="poppins-bold-shocking-pink-24px">{spanText2}</span>
            </div>
          </div>
          <Group7802 className={group7802Props.className} />
        </div>
      </div>
    </div>
  );
}

export default MyBooking;
