import React from "react";
import Group7781 from "../../../components/Profile/Group7781";
import "./ReleaseToMarketplace.css";

function ReleaseToMarketplace(props) {
  const {
    removeFromMarketplace,
    dateToSell,
    period,
    totalPrice,
    price,
    location,
    showDc,
    name,
    number,
    surname,
    confirm,
    cancle,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="release-to-marketplace-1 screen">
        <Group7781 />
        <div className="overlap-group3-5">
          <div className="rectangle-2411"></div>
          <div className="frame-7841">
            <div className="overlap-group1-8">
              <div className="remove-from-marketplace poppins-semi-bold-white-16px">{removeFromMarketplace}</div>
            </div>
          </div>
          <div className="date-to-sell poppins-normal-white-12px">{dateToSell}</div>
          <div className="period poppins-normal-white-12px">{period}</div>
          <div className="total-price poppins-medium-white-12px">{totalPrice}</div>
          <div className="price-2 poppins-medium-shocking-pink-12px">{price}</div>
          <div className="location poppins-normal-white-12px">{location}</div>
          <div className="show-dc poppins-medium-white-12px">{showDc}</div>
          <p className="name poppins-medium-white-12px">{name}</p>
          <div className="number-15 poppins-medium-white-12px">{number}</div>
          <div className="surname poppins-medium-white-12px">{surname}</div>
          <div className="overlap-group2-6">
            <div className="confirm poppins-medium-black-16px">{confirm}</div>
          </div>
          <div className="cancle-1 poppins-medium-white-16px">{cancle}</div>
          <div className="group-7912-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseToMarketplace;
