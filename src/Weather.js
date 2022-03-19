import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [tempetarute, setTemperature] = useState(null);
  function handlResponse(response) {
    // console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mt-3">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>Tel Aviv</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
            ></img>
            <span className="temperature">{Math.round(tempetarute)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation : 15%</li>
              <li>Humidity : 72 %</li>
              <li>Wind : 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "45be73f84a5b597b7603c48501d80624";
    let city = "Tel Aviv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handlResponse);
    return "Loading...";
  }
}
