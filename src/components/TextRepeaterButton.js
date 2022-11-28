import React from "react";
import { useState } from "react";

function TextRepeaterButton() {
  const textArray = [];
  const [repetitions, setRepetitions] = useState(1);
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text </span>);
    if (textArray.length > 5) {textArray.length = 1;}
  }
    return (
    <button className="TextRepeaterButton" onClick={() => setRepetitions(repetitions + 1)}>
      <span>{textArray}</span>
  </button>
  );
}

export default TextRepeaterButton;
