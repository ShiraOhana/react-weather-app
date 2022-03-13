import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45be73f84a5b597b7603c48501d80624&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function updatecity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updatecity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <ul>
          <li>tempetarure: {Math.round(weather.temperature)} C</li>
          <li>humidity: {weather.humidity} %</li>
          <li>wind: {weather.wind} km/h</li>
          <li>{weather.description}</li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
