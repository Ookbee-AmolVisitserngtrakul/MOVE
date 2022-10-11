import { useNavigate } from "react-router-dom";
import React from "react";
import Group7764 from "../../../components/Profile/Group7764";
import Group7765 from "../../../components/Profile/Group7765";
import Group7766 from "../../../components/Profile/Group7766";
import Group7974 from "../../../components/Profile/Group7974";
import XIcon from "../../../components/Profile/XIcon";
import "./Profile.css";

function Profile(props) {
  const navigate = useNavigate();

  const {
    spanText1,
    spanText2,
    myBooking,
    toUpload,
    myStatus,
    adsOnAir,
    number1,
    number2,
    history,
    myWallet,
    myBenefit,
    moveToken,
    loremIpsumIsSimpl,
    phasikaPathomwong,
    carepasikaGmailCom,
    number3,
    myMarketplace,
    number4,
    chat,
    group7764Props,
    group7765Props,
    group7766Props,
    group7974Props,
    xIconProps,
  } = props;

  function closeProfile () {
    navigate("/")
  }

  function renderMyBooking () {
    navigate("/my-booking")
  }

  function renderToUpload () {
    navigate("/to-upload")
  }

  function renderMyStatus () {
    navigate("/upload-status-1")
  }

  function renderAdsOnAir () {
    navigate("/ads-on-air-1")
  }

  function releaseToMarketPlace () {
    navigate("/release-to-marketplace-2")
  }

  function goToChat () {
    navigate("/chat")
  }

  return (
    <div className="container-center-horizontal">
      <div className="profile-8 screen">
        <div className="overlap-group4-4">
          <div className="rectangle-2512-3"></div>
          <img className="line-637-1" src="/img/line-637-1@2x.svg" alt="Line 637" />
          <div className="my-media-1 poppins-bold-white-24px-2">
            <span className="poppins-bold-white-24px">{spanText1}</span>
            <span className="poppins-bold-shocking-pink-24px">{spanText2}</span>
          </div>
          <Group7764 className={group7764Props.className} onClick={renderMyBooking} />
          <Group7765 className={group7765Props.className} onClick={renderToUpload} />
          <Group7766 className={group7766Props.className} onClick={renderMyStatus} />
          <img className="group-8085" src="/img/group-8085@2x.svg" alt="Group 8085" onClick={renderAdsOnAir}/>
          <div className="my-booking-1 poppins-medium-white-8px">{myBooking}</div>
          <div className="to-upload-1 poppins-medium-white-8px">{toUpload}</div>
          <div className="my-status-1 poppins-medium-white-8px">{myStatus}</div>
          <div className="ads-on-air-1 poppins-medium-white-8px">{adsOnAir}</div>
          <div className="overlap-group-30">
            <div className="number-6 poppins-medium-white-8px">{number1}</div>
          </div>
          <div className="overlap-group1-6">
            <div className="number-6 poppins-medium-white-8px">{number2}</div>
          </div>
          <div className="history-1 poppins-medium-shocking-pink-14px">{history}</div>
          <div className="group-7951-3"></div>
          <img className="line-638-3" src="/img/line-638-3@2x.svg" alt="Line 638" />
          <div className="my-wallet-1 poppins-bold-white-16px">{myWallet}</div>
          <div className="my-benefit-1 poppins-medium-white-12px">{myBenefit}</div>
          <img className="vector-21" src="/img/vector-7@2x.svg" alt="Vector" />
          <img className="arrow-down-s-line-2-1" src="/img/arrow-down-s-line-2-1@2x.svg" alt="arrow-down-s-line 2" />
          <img className="arrow-down-s-line-3-1" src="/img/arrow-down-s-line-3-1@2x.svg" alt="arrow-down-s-line 3" />
          <div className="move-token-1 poppins-medium-white-12px">{moveToken}</div>
          <img className="group-7877-4" src="/img/group-7877@2x.svg" alt="Group 7877" />
          <p className="lorem-ipsum-is-simpl-1 poppins-normal-white-12px">{loremIpsumIsSimpl}</p>
          <Group7974 className={group7974Props.className} />
          <div className="phasika-pathomwong-2 poppins-medium-white-16px">{phasikaPathomwong}</div>
          <div className="carepasikagmailcom-1 poppins-light-white-12px">{carepasikaGmailCom}</div>
          <XIcon className={xIconProps.className} onClick={closeProfile}/>
          <div className="overlap-group2-5">
            <div className="number-7 poppins-medium-white-14px">{number3}</div>
          </div>
          <div className="my-marketplace-1 poppins-bold-white-16px" onClick={releaseToMarketPlace}>{myMarketplace}</div>
          <img className="line-638-4" src="/img/line-637-1@2x.svg" alt="Line 638" />
          <img className="line-639-2" src="/img/line-637-1@2x.svg" alt="Line 639" />
          <div className="overlap-group3-4">
            <div className="number-8 poppins-medium-white-14px">{number4}</div>
          </div>
          <div className="chat-2 poppins-bold-white-16px" onClick={goToChat}>{chat}</div>
          <img className="group-7987-1" src="/img/group-7987-1@2x.svg" alt="Group 7987" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
