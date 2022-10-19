import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Frame7827 from "../../../components/Profile/Frame7827";
import Frame7825 from "../../../components/Profile/Frame7825";
import Group7802 from "../../../components/Profile/Group7802";
import "./UploadArtwork2.css";
import { useNavigate } from "react-router-dom";

function UploadArtwork2(props) {
  const {
    moveCom,
    spanText1,
    spanText2,
    type1ParcParagon,
    huaiKhwangBangkok1,
    bookingDate1,
    place1,
    date1,
    end1,
    date2,
    removeFromMarketplace,
    uploadMedia,
    bookingDate2,
    place2,
    date3,
    end2,
    date4,
    type2ParcParagon,
    huaiKhwangBangkok2,
    group7782Props,
    frame7827Props,
    frame7825Props,
    group7802Props,
  } = props;

  const navigate = useNavigate();

  function uploadMediaPage () {
    navigate("/upload-artwork-1");
  }

  function profile () {
    navigate("/profile");
  }

  return (
    <div className="container-center-horizontal">
      <div className="upload-artwork screen">
        <div className="group-7781-5">
          <Group7782 className={group7782Props.className} />
          <div className="rectangle-2394-5"></div>
        </div>
        <div className="overlap-group5-4">
          <div className="rectangle-2463-3"></div>
          <div className="rectangle-2396-3"></div>
          <div className="movecom-3 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="my-marketplace-2 poppins-bold-white-24px-2">
            <span className="poppins-bold-white-24px">{spanText1}</span>
            <span className="poppins-bold-shocking-pink-24px">{spanText2}</span>
          </div>
          <img className="mask-group-25" src="/img/mask-group-14@2x.svg" alt="Mask group" />
          <p className="type-1-parc-paragon-2 poppins-normal-white-16px">{type1ParcParagon}</p>
          <div className="huai-khwang-bangkok-4 poppins-light-white-8px">{huaiKhwangBangkok1}</div>
          <img className="group-7742-4" src="/img/group-7742-4@2x.svg" alt="Group 7742" />
          <Frame7827
            className={frame7827Props.className}
            group7832Props={frame7827Props.group7832Props}
            group7834Props={frame7827Props.group7834Props}
            group7833Props={frame7827Props.group7833Props}
          />
          <div className="booking-date-4 poppins-medium-white-10px">{bookingDate1}</div>
          <div className="overlap-group1-10">
            <div className="rectangle-2480-2"></div>
            <div className="place-23 poppins-medium-black-10px">{place1}</div>
            <div className="date-31 poppins-semi-bold-black-16px">{date1}</div>
            <div className="end-4 poppins-medium-black-10px">{end1}</div>
            <div className="date-32 poppins-semi-bold-black-16px">{date2}</div>
            <img className="line-628-2" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <div className="overlap-group2-8">
            <div className="remove-from-marketplace-1 poppins-medium-black-16px">{removeFromMarketplace}</div>
          </div>
          <div className="overlap-group3-7" onClick={uploadMediaPage}>
            <div className="upload-media-3 poppins-medium-black-16px">{uploadMedia}</div>
          </div>
          <div className="booking-date-5 poppins-medium-white-10px">{bookingDate2}</div>
          <div className="overlap-group4-7">
            <div className="rectangle-2480-2"></div>
            <div className="place-23 poppins-medium-black-10px">{place2}</div>
            <div className="date-31 poppins-semi-bold-black-16px">{date3}</div>
            <div className="end-5 poppins-medium-black-10px">{end2}</div>
            <div className="date-32 poppins-semi-bold-black-16px">{date4}</div>
            <img className="line-628-2" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <img className="mask-group-26" src="/img/mask-group-15@2x.svg" alt="Mask group" />
          <p className="type-2-parc-paragon-2 poppins-normal-white-16px">{type2ParcParagon}</p>
          <div className="huai-khwang-bangkok-5 poppins-light-white-8px">{huaiKhwangBangkok2}</div>
          <img className="vector-24" src="/img/vector-15@2x.svg" alt="Vector" />
          <img className="group-7628" src="/img/group-7628@2x.svg" alt="Group 7628" />
          <Frame7825
            className={frame7825Props.className}
            group7832Props={frame7825Props.group7832Props}
            group7834Props={frame7825Props.group7834Props}
            group7833Props={frame7825Props.group7833Props}
          />
          <img className="arrow-left-line-3" src="/img/arrow-left-line-3@2x.svg" alt="arrow-left-line" onClick={profile}/>
          {/* <Group7802 className={group7802Props.className} /> */}
        </div>
      </div>
    </div>
  );
}

export default UploadArtwork2;
