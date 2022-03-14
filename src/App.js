import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App </h1>
        <Weather />
        <p>
          {" "}
          This project is coded by Shira Ohana and it's open-sourced on{" "}
          <a href="https://github.com/ShiraOhana/react-weather-app">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://agitated-thompson-12c3d6.netlify.app/">netlify.</a>{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
