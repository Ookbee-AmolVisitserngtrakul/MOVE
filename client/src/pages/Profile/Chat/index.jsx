import React from "react";
import { useNavigate } from "react-router-dom";
import Group7877 from "../../../components/Profile/Group7877";
import "./Profile9.css";

function Profile9(props) {
  const {
    chat,
    m,
    momeeKlouh,
    text3,
    text4,
    date1,
    number1,
    price1,
    pimployWee,
    date2,
    number2,
    text5,
    price2,
    jeab,
    date3,
    number3,
  } = props;

  const navigate = useNavigate()

  function backToProfile () {
    navigate("/profile")
  }

  return (
    <div className="container-center-horizontal">
      <div className="profile-9 screen">
        <div className="overlap-group4">
          <div className="rectangle-2512-1"></div>
          <Group7877 />
          <div className="chat poppins-bold-white-24px">{chat}</div>
          <img className="vector" src="/img/vector-3@2x.svg" alt="Vector" onClick={backToProfile}/>
          <div className="group-7951"></div>
          <div className="group-7961"></div>
          <div className="m poppins-medium-white-20px">{m}</div>
          <div className="momee-klouh poppins-semi-bold-white-10px">{momeeKlouh}</div>
          <div className="text-3 poppins-thin-white-10px">{text3}</div>
          <div className="text-4 poppins-thin-white-10px">{text4}</div>
          <div className="date poppins-light-white-8px">{date1}</div>
          <div className="overlap-group1-2">
            <div className="number poppins-medium-white-8px">{number1}</div>
          </div>
          <div className="group-7961-1"></div>
          <div className="price poppins-medium-white-20px">{price1}</div>
          <div className="pimploy-wee poppins-semi-bold-white-10px">{pimployWee}</div>
          <div className="date-1 poppins-light-white-8px">{date2}</div>
          <div className="overlap-group2-1">
            <div className="number poppins-medium-white-8px">{number2}</div>
          </div>
          <img className="line-638" src="/img/line-638@2x.svg" alt="Line 638" />
          <div className="text-5 poppins-thin-white-10px">{text5}</div>
          <div className="group-7961-2"></div>
          <div className="price-1 poppins-medium-white-20px">{price2}</div>
          <div className="jeab poppins-semi-bold-white-10px">{jeab}</div>
          <div className="date-2 poppins-light-white-8px">{date3}</div>
          <div className="overlap-group3">
            <div className="number poppins-medium-white-8px">{number3}</div>
          </div>
          <img className="line-639" src="/img/line-638@2x.svg" alt="Line 639" />
        </div>
      </div>
    </div>
  );
}

export default Profile9;
