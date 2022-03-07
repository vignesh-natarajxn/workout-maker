import React from "react";
import logo from "./logo.svg";
import "./App.css";

const EXERCISE_WEEK = [
  {
    id: "d1",
    name: "Day 1",
  },
];

function App() {
  return (
    <div className="App">
      <ul {{display="flex"}}>
        <header>Hi</header>
        <img src={logo} className="App-logo" alt="logo" />
      </ul>

      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
