import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

import "./index.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "779282a2feb268a8ab73225f96fab2da";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                id="enter-city"
                placeholder="Enter City..."
                onChange={handleCityChange}
              />
              <br />
              <input type="submit" id="search-button" value="Search" />
            </form>
          </div>
          <div className="col-6">
            <p className="date">
              <FormattedDate date={weatherData.date} />
            </p>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
