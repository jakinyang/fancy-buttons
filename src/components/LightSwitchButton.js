import React from "react";
import { useState } from "react";

function LightSwitchButton(props) {
  const {light, toggleLight} = props;
  return (
    <button className="LightSwitchButton" onClick={toggleLight}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;
