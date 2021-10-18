import React, { useState } from "react";
import "./index.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <p className="card-text today-temp">{props.celsius}</p>
        <span className="unit">
          ˚C |{" "}
          <a href="/" onClick={showFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <p className="card-text today-temp">{Math.round(fahrenheit)}</p>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ˚C
          </a>{" "}
          |˚F
        </span>
      </div>
    );
  }
}
