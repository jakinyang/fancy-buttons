import CounterButton from "./components/CounterButton";
import AngryButton from "./components/AngryButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";

function App() {
  const [light, setLight] = useState('on');
  const dark = (light === 'off') ? 'dark' : '';
  const toggleLight = () => setLight(light === 'on' ? 'off' : 'on');

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} setLight={setLight}toggleLight={toggleLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}



export default App;
