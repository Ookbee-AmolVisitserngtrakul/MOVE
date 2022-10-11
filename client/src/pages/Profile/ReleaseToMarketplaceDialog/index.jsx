import React from "react";
import Group7781 from "../../../components/Profile/Group7781";
import "./ReleaseToMarketplaceDialog.css";

function ReleaseToMarketplaceDialog(props) {
  const {
    releaseToMarketplace,
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
      <div className="release-to-marketplace-dialog screen">
        <Group7781 />
        <div className="overlap-group3-13">
          <div className="rectangle-2411-1"></div>
          <div className="frame-7841-1">
            <div className="overlap-group1-17">
              <div className="release-to-marketplace-2 poppins-semi-bold-white-16px">{releaseToMarketplace}</div>
            </div>
          </div>
          <div className="date-to-sell-1 poppins-normal-white-12px">{dateToSell}</div>
          <div className="period-1 poppins-normal-white-12px">{period}</div>
          <div className="total-price-1 poppins-medium-white-12px">{totalPrice}</div>
          <div className="price-4 poppins-medium-shocking-pink-12px">{price}</div>
          <div className="location-8 poppins-normal-white-12px">{location}</div>
          <div className="show-dc-1 poppins-medium-white-12px">{showDc}</div>
          <p className="name-8 poppins-medium-white-12px">{name}</p>
          <div className="number-19 poppins-medium-white-12px">{number}</div>
          <div className="surname-1 poppins-medium-white-12px">{surname}</div>
          <div className="overlap-group2-15">
            <div className="confirm-1 poppins-medium-black-16px">{confirm}</div>
          </div>
          <div className="cancle-2 poppins-medium-white-16px">{cancle}</div>
          <div className="group-7912-2"></div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseToMarketplaceDialog;
