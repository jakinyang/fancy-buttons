import React from "react";
import { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);
  const incrementAnger = () => anger < 1 ? setAnger(anger + 0.1) : setAnger(0);
  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }}className="AngryButton" onClick={incrementAnger}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
