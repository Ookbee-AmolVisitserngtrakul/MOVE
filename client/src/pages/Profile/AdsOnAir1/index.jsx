import React from "react";
import { useNavigate } from "react-router-dom";
import Group7782 from  "../../../components/Profile/Group7782";
import "./AdsOnAir1.css";

function AdsOnAir1(props) {
  const {
    moveCom,
    spanText1,
    spanText2,
    checkYourMediaUploadStatusHere,
    location1,
    bookingDate1,
    parcParagonThe91,
    name1,
    march620221,
    uplodeDate1,
    status1,
    onair1,
    onair2,
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
    status3
  } = props;
  const navigate = useNavigate();

  function adsOnAir2 () {
    navigate("/ads-on-air-2")
  }

  return (
    <div className="container-center-horizontal">
      <div className="ads-on-air-1-1 screen">
        <div className="group-7781-7">
          <Group7782 />
          <div className="rectangle-2394-7"></div>
        </div>
        <div className="overlap-group3-9">
          <div className="rectangle-2463-5"></div>
          <div className="rectangle-2396-5"></div>
          <div className="rectangle-2448-4"></div>
          <div className="movecom-5 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="my-status-3 poppins-bold-white-24px-2">
            <span className="poppins-bold-white-24px">{spanText1}</span>
            <span className="poppins-bold-shocking-pink-24px">{spanText2}</span>
          </div>
          <p className="check-your-media-upload-status-here poppins-light-white-12px">
            {checkYourMediaUploadStatusHere}
          </p>
          <div className="group-7883-1"></div>
          <div className="location-5 poppins-medium-white-12px">{location1}</div>
          <div className="booking-date-10 poppins-medium-white-12px">{bookingDate1}</div>
          <p className="parc-paragon-the-9-5 poppins-medium-princess-perfume-12px">{parcParagonThe91}</p>
          <p className="name-5 poppins-normal-white-12px">{name1}</p>
          <div className="march-62022-4 poppins-normal-white-12px">{march620221}</div>
          <div className="uplode-date-4 poppins-medium-white-12px">{uplodeDate1}</div>
          <div className="status-4 poppins-medium-white-12px">{status1}</div>
          <div className="overlap-group1-13" onClick={adsOnAir2}>
            <div className="overlap-group-33">
              <img className="group-7761-1" src="/img/group-7761-1@2x.svg" alt="Group 7761" />
            </div>
            <div className="onair poppins-medium-tory-blue-12px">{onair1}</div>
          </div>
          <div className="overlap-group2-10">
            <div className="overlap-group-33">
              <img className="group-7761-1" src="/img/group-7761-2@2x.svg" alt="Group 7761" />
            </div>
            <div className="onair poppins-medium-tory-blue-12px">{onair2}</div>
          </div>
          <div className="group-7945-1"></div>
          <div className="location-6 poppins-medium-white-12px">{location2}</div>
          <div className="booking-date-11 poppins-medium-white-12px">{bookingDate2}</div>
          <p className="parc-paragon-the-9-6 poppins-medium-princess-perfume-12px">{parcParagonThe92}</p>
          <p className="name-6 poppins-normal-white-12px">{name2}</p>
          <div className="march-62022-5 poppins-normal-white-12px">{march620222}</div>
          <div className="uplode-date-5 poppins-medium-white-12px">{uplodeDate2}</div>
          <div className="status-5 poppins-medium-white-12px">{status2}</div>
          <div className="location-7 poppins-medium-white-12px">{location3}</div>
          <div className="booking-date-12 poppins-medium-white-12px">{bookingDate3}</div>
          <p className="parc-paragon-the-9-7 poppins-medium-princess-perfume-12px">{parcParagonThe93}</p>
          <p className="name-7 poppins-normal-white-12px">{name3}</p>
          <div className="march-62022-6 poppins-normal-white-12px">{march620223}</div>
          <div className="uplode-date-6 poppins-medium-white-12px">{uplodeDate3}</div>
          <div className="status-6 poppins-medium-white-12px">{status3}</div>
        </div>
      </div>
    </div>
  );
}

export default AdsOnAir1;
