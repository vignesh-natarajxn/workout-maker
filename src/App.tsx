import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExerciseDay } from "./exerciseDay";

const EXERCISE_WEEK: ExerciseDay[] = [];

EXERCISE_WEEK.push(
  {
    id: "d1",
    name: "Day 1",
    exercises: {
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },
  },
  {
    id: "d2",
    name: "Day 2",
    exercises: {
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    },
  },
  {
    id: "d3",
    name: "Day 3",
    exercises: {
      name: "Exercise 3",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 3a",
    },
  },
  {
    id: "d4",
    name: "Day 4",
    exercises: {
      name: "Exercise 4",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 4a",
    },
  },
  {
    id: "d5",
    name: "Day 5",
    exercises: {
      name: "Exercise 5",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 5a",
    },
  },
  {
    id: "d6",
    name: "Day 6",
    exercises: {
      name: "Exercise 6",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 6a",
    },
  },
  {
    id: "d7",
    name: "Day 7",
    exercises: {
      name: "Exercise 7",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 7a",
    },
  }
);

function App() {
  const [exerciseWeek, setExerciseWeek] =
    useState<ExerciseDay[]>(EXERCISE_WEEK);

  return (
    <div>
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Workout Maker</h1>
      </header>
      <ul>
        {EXERCISE_WEEK.map((exerciseDay) => (
          <li>{exerciseDay.name}</li>
        ))}
      </ul>
      {/* <header className="App-header">
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
