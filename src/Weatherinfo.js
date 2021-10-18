import React from "react";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <p className="card-text" id="your-city">
                {props.data.city}
              </p>
              <WeatherTemperature celsius={props.data.temperature} />
              <p className="card-text" id="today-high-low">
                -1/<strong>35</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="today-icon"
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body" id="info">
              <p className="card-text" id="today-condition">
                Condition: {props.data.description}
              </p>
              <p className="card-text" id="today-humidity">
                Humidity: {props.data.humidity}%
              </p>
              <p className="card-text" id="today-wind">
                Wind: {props.data.wind} mph
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
