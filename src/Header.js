import React from "react";
import "./index.css";

export default function Header() {
  return (
    <div className="Header">
      <h1>-Weather-</h1>
      <form id="find-city">
        <input type="text" id="enter-city" placeholder="Enter City..." />
        <br />
        <input type="submit" id="search-button" value="Search" />
        <input type="submit" id="location-button" value="Location" />
      </form>
      <div className="date">
        <p id="today">Wednesday 21st July 2021</p>
        <p id="time">13:30 GMT</p>
      </div>
    </div>
  );
}
