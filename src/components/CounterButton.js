import React from "react";
import { useState } from "react";

function CounterButton() {
  const [counter, setCount] = useState(0);
  const incrementCount = () => setCount(counter + 1);
  return (
    <button className="CounterButton" onClick={incrementCount}>
      You clicked me {counter} amount of times
    </button>
  );
}

export default CounterButton;
