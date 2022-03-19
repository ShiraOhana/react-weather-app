import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Tellll Aviv" />
        </header>
        <footer>
          <div>
            This project was coded by Shira Ohana and it's{" "}
            <a
              href="https://github.com/ShiraOhana/react-weather-app"
              targer="_blank"
            >
              {" "}
              open-sourced on GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
