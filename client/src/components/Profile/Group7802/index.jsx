import React from "react";
import "./Group7802.css";

function Group7802(props) {
  const { className } = props;

  return (
    <div className={`group-7802 ${className || ""}`}>
      <div className="flex-col-1">
        <div className="services poppins-semi-bold-shocking-pink-12px">Services</div>
        <div className="media-booking poppins-light-white-12px">Media Booking</div>
        <div className="marketplace poppins-light-white-12px">Marketplace</div>
        <div className="place-13 poppins-medium-shocking-pink-12px">Contact</div>
        <div className="group-6891">
          <img className="phone" src="/img/phone@2x.svg" alt="phone" />
          <div className="phone-1 poppins-light-white-12px">081-234-5678</div>
        </div>
        <div className="mail-container">
          <img className="mail_outline" src="/img/mail-outline@2x.svg" alt="mail_outline" />
          <div className="adminmailcom poppins-light-white-12px">admin@mail.com</div>
        </div>
        <img className="group-7692" src="/img/group-7692@2x.svg" alt="Group 7692" />
      </div>
      <div className="flex-col-2">
        <div className="about-spv poppins-semi-bold-shocking-pink-12px">About SPV</div>
        <div className="flex-col-item-1 poppins-light-white-12px">Company profile</div>
        <div className="flex-col-item-1 poppins-light-white-12px">Newsroom</div>
        <div className="investors poppins-light-white-12px">Investors</div>
      </div>
      <div className="flex-col-3">
        <div className="developers poppins-medium-shocking-pink-12px">Developers</div>
        <div className="whitepaper poppins-light-white-12px">Whitepaper</div>
        <div className="github poppins-light-white-12px">Github</div>
      </div>
    </div>
  );
}

export default Group7802;
