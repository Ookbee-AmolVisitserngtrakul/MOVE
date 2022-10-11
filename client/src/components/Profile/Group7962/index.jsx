import React from "react";
import Group7786 from "../Group7786";
import Group7785 from "../Group7785";
import "./Group7962.css";

function Group7962(props) {
  const { price, phasika, group7785Props } = props;

  return (
    <div className="group-7962">
      <div className="group-7842-6">
        <Group7786 />
        <Group7785 className={group7785Props.className} />
        <div className="overlap-group-32">
          <div className="ellipse-460"></div>
          <div className="price-3">{price}</div>
        </div>
        <div className="overlap-group1-11">
          <div className="phasika poppins-medium-white-16px">{phasika}</div>
          <img className="arrow-down-s-line-1" src="/img/arrow-down-s-line-1@2x.svg" alt="arrow-down-s-line 1" />
        </div>
      </div>
    </div>
  );
}

export default Group7962;
