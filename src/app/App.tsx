import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./Styles.css";
import { ExerciseDay } from "./models/exerciseDay";
import UIExerciseWeek from "./UIExerciseWeek";

const EXERCISE_WEEK: ExerciseDay[] = [];

EXERCISE_WEEK.push(
  {
    id: "d1",
    name: "Day 1",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }]
  },
  {
    id: "d2",
    name: "Day 2",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }],
  },
  {
    id: "d3",
    name: "Day 3",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }],
  },
  {
    id: "d4",
    name: "Day 4",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }],
  },
  {
    id: "d5",
    name: "Day 5",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }],
  },
  {
    id: "d6",
    name: "Day 6",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }],
  },
  {
    id: "d7",
    name: "Day 7",
    exercises: [{
      name: "Exercise 1",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 1a",
    },{
      name: "Exercise 2",
      timeBetween: 120,
      sets: 3,
      superset: "Exercise 2a",
    }],
  }
);

function App() {
  const [exerciseWeek, setExerciseWeek] = useState<ExerciseDay[]>([]);

  useEffect(() => {
    setExerciseWeek(EXERCISE_WEEK);
  }, []);

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <div>Workout Maker</div>
      </header>
      <UIExerciseWeek exerciseWeek={exerciseWeek} />
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
    </>
  );
}

export default App;
