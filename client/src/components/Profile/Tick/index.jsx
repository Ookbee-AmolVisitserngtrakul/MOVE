import React from "react";
import "./Tick.css";

function Tick(props) {
  const { className } = props;

  return (
    <div className={`tick ${className || ""}`}>
      <img className="vector-1-stroke" src="/img/vector-1--stroke-@2x.svg" alt="Vector 1 (Stroke)" />
    </div>
  );
}

export default Tick;
