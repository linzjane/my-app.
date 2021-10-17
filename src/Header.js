import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1>-Weather-</h1>
      <div className="date">
        <p id="today">Wednesday 21st July 2021</p>
        <p id="time">13:30 GMT</p>
      </div>
    </div>
  );
}
