import "./index.css";

function App() {
  return (
    <div className="App">
      <form id="find-city">
        <input type="text" id="enter-city" placeholder="Enter City..." />
        <br />
        <input type="submit" id="search-button" value="Search" />
        <input type="submit" id="location-button" value="Location" />
      </form>
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <p className="card-text" id="your-city">
                Manchester, England
              </p>
              <p className="card-text" id="today-temperature">
                30˚C
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
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
                id="today-icon"
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body" id="info">
              <p className="card-text" id="today-condition">
                Condition: Sunny
              </p>
              <p className="card-text" id="today-humidity">
                Humidity: 45%
              </p>
              <p className="card-text" id="today-wind">
                Wind: 11 mph
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
