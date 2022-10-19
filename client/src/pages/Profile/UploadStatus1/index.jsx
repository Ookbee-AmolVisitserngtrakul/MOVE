import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Group7944 from "../../../components/Profile/Group7944";
import Tick from "../../../components/Profile/Tick";
import XIcon2 from "../../../components/Profile/XIcon2";
import Group7802 from "../../../components/Profile/Group7802";
import "./UploadStatus1.css";
import { useNavigate } from "react-router-dom";

function UploadStatus1(props) {
  const {
    moveCom,
    location1,
    bookingDate1,
    parcParagonThe91,
    name1,
    march620221,
    uplodeDate1,
    status1,
    location2,
    bookingDate2,
    parcParagonThe92,
    name2,
    march620222,
    uplodeDate2,
    status2,
    location3,
    bookingDate3,
    parcParagonThe93,
    name3,
    march620223,
    uplodeDate3,
    status3,
    approved,
    location4,
    bookingDate4,
    parcParagonThe94,
    name4,
    march620224,
    uplodeDate4,
    status4,
    checking1,
    checking2,
    rejected,
    invalidCategory,
    pleaseReUpload,
    spanText1,
    spanText2,
    group79441Props,
    group79442Props,
    xIcon2Props,
    group7802Props,
  } = props;

  const navigate = useNavigate()

  function backToProfile () {
    navigate("/profile")
  }

  function uploadStatus2 () {
    navigate("/upload-status-2")
  }

  function uploadStatus3 () {
    navigate("/upload-status-3")
  }

  function uploadArtwork () {
    navigate("/upload-artwork-1")
  }

  return (
    <div className="container-center-horizontal">
      <div className="upload-status-1 screen">
        <div className="group-7781-6">
          <Group7782 />
          <div className="rectangle-2394-6"></div>
        </div>
        <div className="overlap-group4-8">
          <div className="rectangle-2463-4"></div>
          <div className="rectangle-2396-4"></div>
          <div className="rectangle-2448-3"></div>
          <div className="movecom-4 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="group-7883"></div>
          <div className="location-1 poppins-medium-white-12px">{location1}</div>
          <div className="booking-date-6 poppins-medium-white-12px">{bookingDate1}</div>
          <p className="parc-paragon-the-9-1 poppins-medium-princess-perfume-12px">{parcParagonThe91}</p>
          <p className="name-1 poppins-normal-white-12px">{name1}</p>
          <div className="march-62022 poppins-normal-white-12px">{march620221}</div>
          <div className="uplode-date poppins-medium-white-12px">{uplodeDate1}</div>
          <div className="status poppins-medium-white-12px">{status1}</div>
          <div className="group-7945"></div>
          <div className="location-2 poppins-medium-white-12px">{location2}</div>
          <div className="booking-date-7 poppins-medium-white-12px">{bookingDate2}</div>
          <p className="parc-paragon-the-9-2 poppins-medium-princess-perfume-12px">{parcParagonThe92}</p>
          <p className="name-2 poppins-normal-white-12px">{name2}</p>
          <div className="march-62022-1 poppins-normal-white-12px">{march620222}</div>
          <div className="uplode-date-1 poppins-medium-white-12px">{uplodeDate2}</div>
          <div className="status-1 poppins-medium-white-12px">{status2}</div>
          <div className="location-3 poppins-medium-white-12px">{location3}</div>
          <div className="booking-date-8 poppins-medium-white-12px">{bookingDate3}</div>
          <p className="parc-paragon-the-9-3 poppins-medium-princess-perfume-12px">{parcParagonThe93}</p>
          <p className="name-3 poppins-normal-white-12px">{name3}</p>
          <div className="march-62022-2 poppins-normal-white-12px">{march620223}</div>
          <div className="uplode-date-2 poppins-medium-white-12px">{uplodeDate3}</div>
          <div className="status-2 poppins-medium-white-12px">{status3}</div>
          <div className="overlap-group1-12" onClick={uploadStatus3}>
            <Group7944 />
            <div className="approved poppins-medium-chateau-green-12px">{approved}</div>
            <Tick />
          </div>
          <div className="group-7947"></div>
          <div className="location-4 poppins-medium-white-12px">{location4}</div>
          <div className="booking-date-9 poppins-medium-white-12px">{bookingDate4}</div>
          <p className="parc-paragon-the-9-4 poppins-medium-princess-perfume-12px">{parcParagonThe94}</p>
          <p className="name-4 poppins-normal-white-12px">{name4}</p>
          <div className="march-62022-3 poppins-normal-white-12px">{march620224}</div>
          <div className="uplode-date-3 poppins-medium-white-12px">{uplodeDate4}</div>
          <div className="status-3 poppins-medium-white-12px">{status4}</div>
          <div className="overlap-group2-9" onClick={uploadStatus2}>
            <Group7944 className={group79441Props.className} />
            <div className="checking poppins-medium-yellow-sea-12px">{checking1}</div>
            <img className="icon-clock" src="/img/history@2x.svg" alt="icon-clock" />
          </div>
          <div className="overlap-group3-8" onClick={uploadStatus2}>
            <Group7944 className={group79442Props.className} />
            <div className="checking poppins-medium-yellow-sea-12px">{checking2}</div>
            <img className="icon-clock" src="/img/history-1@2x.svg" alt="icon-clock" />
          </div>
          <div className="rejected" onClick={uploadArtwork}>{rejected}</div>
          <div className="group-7949">
            <XIcon2 className={xIcon2Props.className} />
          </div>
          <div className="rectangle-2478"></div>
          <div className="group-7948">
            <div className="flex-col-25">
              <div className="invalid-category">{invalidCategory}</div>
              <div className="please-re-upload">{pleaseReUpload}</div>
            </div>
            <img className="question-fill" src="/img/question-fill@2x.svg" alt="question-fill" />
          </div>
          <img className="vector-25" src="/img/vector-17@2x.svg" alt="Vector" onClick={backToProfile}/>
          <div className="my-status-2 poppins-bold-white-24px-2">
            <span className="poppins-bold-white-24px">{spanText1}</span>
            <span className="poppins-bold-shocking-pink-24px">{spanText2}</span>
          </div>
          {/* <Group7802 className={group7802Props.className} /> */}
        </div>
      </div>
    </div>
  );
}

export default UploadStatus1;
