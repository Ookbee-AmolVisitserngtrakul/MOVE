import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Group7904 from "../../../components/Profile/Group7904";
import Group7930 from "../../../components/Profile/Group7930";
import Group7919 from "../../../components/Profile/Group7919";
import XIcon2 from "../../../components/Profile/XIcon2";
import Group7802 from "../../../components/Profile/Group7802";
import "./UploadArtwork.css";
import { useNavigate } from "react-router-dom";
import Screen from '../../../components/Screen'

function UploadArtwork(props) {
  const {
    moveCom,
    parcParagonThe9,
    addressChaturathit,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    quantity,
    availablePack,
    yourArtWorkWill,
    number1,
    minLoop,
    x2MinutesPer1AvailablePack,
    number2,
    address1,
    remark,
    loremIpsumIsSimpl,
    format,
    screenResolution,
    framerate,
    address2,
    address3,
    formatAnimation,
    aviWmvMovMp41,
    formatArtWork,
    aiPsd,
    aviWmvMovMp42,
    uploading,
    screenA480X408Px,
    screenC60X408Px,
    screenD600X408Px,
    screenE660X408Px,
    screenF1020X408Px,
    screenB360X408Px,
    completed1,
    completed2,
    completed3,
    completed4,
    completed5,
    completed6,
    uploadTime,
    youHave5DaysAnd,
    mockup,
    preview,
    group7904Props,
    group7930Props,
    group79191Props,
    xIcon21Props,
    group79192Props,
    xIcon22Props,
    group79193Props,
    xIcon23Props,
    group79194Props,
    xIcon24Props,
    group79195Props,
    xIcon25Props,
  } = props;

  const navigate = useNavigate();

  function backToMyBooking () {
    navigate("/my-booking")
  }

  function renderMyStatus () {
    navigate("/upload-status-1")
  }

  return (
    <div className="container-center-horizontal">
      <div className="upload-artwork-1 screen">
        <div className="group-7781">
          <Group7782 />
          <div className="rectangle-2394"></div>
        </div>
        <div className="overlap-group7">
          <div className="rectangle-2463"></div>
          <div className="ellipse-container-3">
            <div className="ellipse-441-3"></div>
            <div className="ellipse-442-3"></div>
          </div>
          <div className="rectangle-2396"></div>
          <div className="rectangle-2448"></div>
          <div className="movecom sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="parc-paragon-the-9 poppins-bold-white-24px">{parcParagonThe9}</div>
          <div className="group-7730">
            <img className="group-7629" src="/img/group-7629@2x.svg" alt="Group 7629" />
            <p className="address-chaturathit poppins-light-white-8px">{addressChaturathit}</p>
          </div>
          <div className="format-customized poppins-bold-white-16px-2">
            <span className="poppins-bold-white-16px">{spanText1}</span>
            <span className="poppins-bold-shocking-pink-16px">{spanText2}</span>
          </div>
          <div className="detail-booking poppins-bold-white-16px-2">
            <span className="poppins-bold-white-16px">{spanText3}</span>
            <span className="poppins-bold-shocking-pink-16px">{spanText4}</span>
          </div>
          <Group7904 screenShot20220705At16401={group7904Props.screenShot20220705At16401} />
          <div className="overlap-group3-2">
            <div className="group-7905">
              <div className="flex-row">
                <div className="flex-col poppins-medium-white-10px">
                  <div className="flex-col-item">{quantity}</div>
                  <div className="flex-col-item">{availablePack}</div>
                </div>
                <div className="overlap-group-1 poppins-light-white-10px">
                  <p className="your-art-work-will">{yourArtWorkWill}</p>
                  <div className="number-1">{number1}</div>
                </div>
              </div>
              <div className="flex-row-1">
                <div className="min-loop poppins-medium-white-10px">{minLoop}</div>
                <div className="overlap-group1-4 poppins-light-white-10px">
                  <p className="x2-minutes-per-1-available-pack">{x2MinutesPer1AvailablePack}</p>
                  <div className="number-2">{number2}</div>
                </div>
              </div>
            </div>
            <div className="address poppins-light-white-10px">{address1}</div>
          </div>
          <div className="rectangle-2477"></div>
          <div className="overlap-group4-2">
            <div className="rectangle-2021"></div>
            <div className="rectangle-2468"></div>
            <div className="remark poppins-bold-black-16px">{remark}</div>
            <img className="frame-1" src="/img/frame-1@2x.svg" alt="Frame" />
            <p className="lorem-ipsum-is-simpl poppins-normal-black-10px">{loremIpsumIsSimpl}</p>
          </div>
          <div className="overlap-group6">
            <Screen param="paragon90-degree"></Screen>
          </div>
          <div style={{position:'relative',top:'20px'}}>
            <div className="format poppins-medium-white-10px">{format}</div>
            <div className="screen-resolution poppins-medium-white-10px">{screenResolution}</div>
            <div className="frame-rate poppins-medium-white-10px">{framerate}</div>
            <div className="address-1 poppins-light-white-10px">{address2}</div>
            <div className="address-2 poppins-light-white-10px">{address3}</div>
            <div className="format-animation poppins-medium-white-10px">{formatAnimation}</div>
            <p className="avi-wmv-mov-mp4 poppins-light-white-10px">{aviWmvMovMp41}</p>
            <p className="format-art-work poppins-medium-white-10px">{formatArtWork}</p>
            <div className="ai-psd poppins-light-white-10px">{aiPsd}</div>
            <p className="avi-wmv-mov-mp4-1 poppins-light-white-10px">{aviWmvMovMp42}</p>
            <div className="uploading poppins-bold-white-16px" style={{marginTop:'-10px'}}>{uploading}</div>
          </div>
          <Group7930 cancle={group7930Props.cancle} uploadMedia={renderMyStatus} cancel={backToMyBooking}/>
          <p className="screen-a-480-x-408-px poppins-light-white-10px">{screenA480X408Px}</p>
          <Group7919 />
          <XIcon2 />
          <p className="screen-c-60-x-408-px poppins-light-white-10px">{screenC60X408Px}</p>
          <div className="group-7923"></div>
          <p className="screen-d-600-x-408-px poppins-light-white-10px">{screenD600X408Px}</p>
          <div className="group-7925"></div>
          <p className="screen-e-660-x-408-px poppins-light-white-10px">{screenE660X408Px}</p>
          <div className="group-7927"></div>
          <p className="screen-f-1020-x-408-px poppins-light-white-10px">{screenF1020X408Px}</p>
          <div className="group-7929"></div>
          <p className="screen-b-360-x-408-px poppins-light-white-10px">{screenB360X408Px}</p>
          <Group7919 className={group79191Props.className} />
          <div className="completed poppins-light-white-8px">{completed1}</div>
          <div className="completed-1 poppins-light-white-8px">{completed2}</div>
          <XIcon2 className={xIcon21Props.className} />
          <Group7919 className={group79192Props.className} />
          <div className="completed-2 poppins-light-white-8px">{completed3}</div>
          <XIcon2 className={xIcon22Props.className} />
          <Group7919 className={group79193Props.className} />
          <div className="completed-3 poppins-light-white-8px">{completed4}</div>
          <XIcon2 className={xIcon23Props.className} />
          <Group7919 className={group79194Props.className} />
          <div className="completed-4 poppins-light-white-8px">{completed5}</div>
          <XIcon2 className={xIcon24Props.className} />
          <Group7919 className={group79195Props.className} />
          <div className="completed-5 poppins-light-white-8px">{completed6}</div>
          <XIcon2 className={xIcon25Props.className} />
          <div className="ellipse-448"></div>
          <div className="group-7933"></div>
          <div className="group-7934"></div>
          <div className="group-7935"></div>
          <div className="group-7936"></div>
          <div className="group-7937"></div>
          <img className="mask-group-6" src="/img/mask-group@2x.svg" alt="Mask group" />
          <img className="mask-group-7" src="/img/mask-group-1@2x.svg" alt="Mask group" />
          <img className="mask-group-8" src="/img/mask-group-2@2x.svg" alt="Mask group" />
          <img className="mask-group-9" src="/img/mask-group-3@2x.svg" alt="Mask group" />
          <img className="mask-group-10" src="/img/mask-group-4@2x.svg" alt="Mask group" />
          {/* <Group7802 /> */}
          <img className="arrow-left-line" src="/img/arrow-left-line@2x.svg" alt="arrow-left-line" onClick={backToMyBooking}/>
          <div className="rectangle-2486"></div>
          <div className="upload-time poppins-bold-black-16px">{uploadTime}</div>
          <img className="frame-2" src="/img/frame@2x.svg" alt="Frame" />
          <p className="you-have-5-days-and">{youHave5DaysAnd}</p>
          <div className="group-8081">
            <div className="mockup poppins-medium-shocking-pink-14px">{mockup}</div>
            <div className="preview poppins-medium-white-14px">{preview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadArtwork;
