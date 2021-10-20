import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        <p className="author">
          <a href="https://github.com/linzjane/my-app.">Open-source code </a>
          by Lyndsey Thompson
        </p>
      </footer>
    </div>
  );
}
