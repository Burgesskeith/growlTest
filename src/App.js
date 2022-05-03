import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { useGrowl, Growl } from "./growl";

function App() {
	const [growlTime, setGrowlTime] = useState();
  const [active, setActive] = useGrowl();
  
  const handleChange = (e) => {
    setGrowlTime (e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/other">
          Go to the Other component
        </Link>
        <p>Set Growl display time in seconds:</p>
        <input
          type="text"
          id="growlTime"
					name="growlTime"
          onChange={handleChange}
        ></input>
        <a className="App-link" href="#" onClick={() => void setActive(true)}>
          Click here to activate the growl
        </a>
      </header>
      <Growl
        displayTime={growlTime}
        onDismissed={() => setActive(false)}
        active={active}
        message="Hello World!"
      />
    </div>
  );
}

export default App;