import React from "react";
import Group7832 from "../Group7832";
import Group7834 from "../Group7834";
import Group7833 from "../Group7833";
import "./Frame7827.css";

function Frame7827(props) {
  const { className, group7832Props, group7834Props, group7833Props } = props;

  return (
    <div className={`frame-7827 ${className || ""}`}>
      <Group7832 address={group7832Props.address} />
      <Group7834 number={group7834Props.number} />
      <Group7833 number={group7833Props.number} />
    </div>
  );
}

export default Frame7827;
