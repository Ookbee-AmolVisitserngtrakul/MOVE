import React from "react";
import Group7782 from "../../../components/Profile/Group7782";
import Group7904 from "../../../components/Profile/Group7904";
import Group7802 from "../../../components/Profile/Group7802";
import "./ReleaseToMarketplace2.css";
import { useNavigate } from "react-router-dom";

function ReleaseToMarketplace2(props) {
  const {
    moveCom,
    parcParagonThe9,
    addressChaturathit,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    quantity,
    availablePack,
    yourArtWorkWill,
    number1,
    minLoop,
    x2MinutesPer1AvailablePack,
    number2,
    address,
    bookingDate,
    place,
    date1,
    end,
    date2,
    date3,
    date4,
    currentPrice,
    price,
    text16,
    text17,
    platformFeeIsSold,
    releaseToMarketplace,
    cancle,
    group7904Props,
    group7802Props,
  } = props;
  const navigate = useNavigate()

  function myBooking () {
    navigate("/my-booking")
  }

  return (
    <div className="container-center-horizontal">
      <div className="release-to-marketplace-3 screen">
        <div className="group-7781-11">
          <Group7782 />
          <div className="rectangle-2394-11"></div>
        </div>
        <div className="overlap-group4-12">
          <div className="rectangle-2463-9"></div>
          <div className="group-7883-2"></div>
          <div className="rectangle-2396-9"></div>
          <div className="rectangle-2448-8"></div>
          <div className="movecom-9 sfpro-regular-normal-white-16px">{moveCom}</div>
          <div className="parc-paragon-the-9-11 poppins-bold-white-24px">{parcParagonThe9}</div>
          <p className="address-chaturathit-4 poppins-light-white-8px">{addressChaturathit}</p>
          <img className="group-7629-4" src="/img/group-7629-4@2x.svg" alt="Group 7629" />
          <div className="format-customized-1 poppins-bold-white-16px-2">
            <span className="poppins-bold-white-16px">{spanText1}</span>
            <span className="poppins-bold-shocking-pink-16px">{spanText2}</span>
          </div>
          <div className="detail-booking-1 poppins-bold-white-16px-2">
            <span className="poppins-bold-white-16px">{spanText3}</span>
            <span className="poppins-bold-shocking-pink-16px">{spanText4}</span>
          </div>
          <div className="set-date-to-sell poppins-bold-white-16px-2">
            <span className="poppins-bold-white-16px">{spanText5}</span>
            <span className="poppins-bold-shocking-pink-16px">{spanText6}</span>
          </div>
          <div className="set-price poppins-bold-white-16px-2">
            <span className="poppins-bold-white-16px">{spanText7}</span>
            <span className="poppins-bold-shocking-pink-16px">{spanText8}</span>
          </div>
          <Group7904
            screenShot20220705At16401={group7904Props.screenShot20220705At16401}
            className={group7904Props.className}
          />
          <div className="overlap-group2-16">
            <div className="group-7905-1">
              <div className="flex-row-10">
                <div className="flex-col-29 poppins-medium-white-10px">
                  <div className="flex-col-item-12">{quantity}</div>
                  <div className="flex-col-item-12">{availablePack}</div>
                </div>
                <div className="overlap-group-38 poppins-light-white-10px">
                  <p className="your-art-work-will-4">{yourArtWorkWill}</p>
                  <div className="number-20">{number1}</div>
                </div>
              </div>
              <div className="flex-row-11">
                <div className="min-loop-7 poppins-medium-white-10px">{minLoop}</div>
                <div className="overlap-group1-18 poppins-light-white-10px">
                  <p className="x2-minutes-per-1-available-pack-4">{x2MinutesPer1AvailablePack}</p>
                  <div className="number-21">{number2}</div>
                </div>
              </div>
            </div>
            <div className="address-9 poppins-light-white-10px">{address}</div>
          </div>
          <div className="rectangle-2477-1"></div>
          <div className="booking-date-16 poppins-medium-white-10px">{bookingDate}</div>
          <div className="overlap-group3-14">
            <div className="rectangle-2480-6"></div>
            <div className="place-27 poppins-medium-black-10px">{place}</div>
            <div className="date-39 poppins-semi-bold-black-16px">{date1}</div>
            <div className="end-9 poppins-medium-black-10px">{end}</div>
            <div className="date-40 poppins-semi-bold-black-16px">{date2}</div>
            <img className="line-628-6" src="/img/line-628@2x.svg" alt="Line 628" />
          </div>
          <img className="line-629-1" src="/img/line-629@2x.svg" alt="Line 629" />
          <img className="line-631-1" src="/img/line-631-1@2x.svg" alt="Line 631" />
          <div className="date-41 poppins-medium-white-12px">{date3}</div>
          <div className="date-42 poppins-medium-white-12px">{date4}</div>
          <img className="line-628-7" src="/img/line-628-9@2x.svg" alt="Line 628" />
          <div className="current-price poppins-medium-white-12px">{currentPrice}</div>
          <div className="price-5 poppins-normal-white-12px">{price}</div>
          <div className="text-16 poppins-normal-white-12px">{text16}</div>
          <div className="text-17">{text17}</div>
          <div className="platform-fee-is-sold poppins-normal-white-12px">{platformFeeIsSold}</div>
          <div className="group-7911"></div>
          <div className="release-to-marketplace-4 poppins-medium-black-16px">{releaseToMarketplace}</div>
          <div className="cancle-3 poppins-medium-white-16px">{cancle}</div>
          <div className="group-7912-3" onClick={myBooking}></div>
          {/* <Group7802 className={group7802Props.className} /> */}
        </div>
      </div>
    </div>
  );
}

export default ReleaseToMarketplace2;
