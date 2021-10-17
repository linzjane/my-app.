import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./App.css";

import "./index.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
            <form id="find-city">
              <input type="text" id="enter-city" placeholder="Enter City..." />
              <br />
              <input type="submit" id="search-button" value="Search" />
              <input type="submit" id="location-button" value="Location" />
            </form>
          </div>
          <div className="col-6">
            <p className="date">
              <FormattedDate date={weatherData.date} />
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text" id="your-city">
                  {weatherData.city}
                </p>
                <p className="card-text" id="today-temperature">
                  {weatherData.temperature}˚C
                </p>
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
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="today-icon"
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body" id="info">
                <p className="card-text" id="today-condition">
                  Condition: {weatherData.description}
                </p>
                <p className="card-text" id="today-humidity">
                  Humidity: {weatherData.humidity}%
                </p>
                <p className="card-text" id="today-wind">
                  Wind: {weatherData.wind} mph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "779282a2feb268a8ab73225f96fab2da";
    let city = "London";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
