import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <hr />
      <h2>5-Day Forecast</h2>
      <br />
      <div className="weather-forecast" id="forecast"></div>
      <br />
      <p className="author">
        <a href="https://github.com/linzjane/my-app.">Open-source code </a>
        by Lyndsey Thompson
      </p>
    </div>
  );
}
