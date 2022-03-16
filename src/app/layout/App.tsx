import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "../logo.svg";
import "../Styles.css";
// Components
import UIExerciseWeek from "./startExercises/UIExerciseWeek";
import UIExerciseDay from "./startExercises/UIExerciseDay";
// Models
import { ExerciseDay } from "../models/exerciseDay";
import EditMain from "./editExercises/EditMain";
// Material UI
import { Box, Button, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
/************************************************************************************************/
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8400",
    },
    secondary: {
      main: "#191f27",
    },
  },
  typography: {
    fontFamily: "Exo",
    fontWeightLight: "400",
    fontWeightRegular: "500",
    fontWeightMedium: "600",
    fontWeightBold: "700",
  },
});
const EXERCISE_POOL = [
  {
    category: "Chest",
    exercises: [
      { name: "Bench Press" },
      { name: "Pushup" },
      { name: "Bench Fly" },
      { name: "Incline Bench Press" },
      { name: "Cable Crossover" },
      { name: "Machine Fly" },
    ],
  },
  {
    category: "Triceps",
    exercises: [
      { name: "Skullcrusher" },
      { name: "Dip" },
      { name: "Overhead Tricep Extension" },
    ],
  },
  {
    category: "Shoulders",
    exercises: [
      { name: "Overhead Press" },
      { name: "Lateral Rise" },
      { name: "Arnold Press" },
    ],
  },
  {
    category: "Biceps and Forearms",
    exercises: [
      { name: "Barbell Curl" },
      { name: "Dumbbell Curl" },
      { name: "Alternate Diagonal Curl" },
      { name: "Reverse Curl" },
      { name: "Hammer Curl" },
    ],
  },
  {
    category: "Back",
    exercises: [
      { name: "Row" },
      { name: "Pullup" },
      { name: "Chinup" },
      { name: "Lat Pulldown" },
      { name: "Seated Row" },
      { name: "Rear Delt Fly" },
    ],
  },
  {
    category: "Legs",
    exercises: [
      { name: "Squat" },
      { name: "Deadlift" },
      { name: "Leg Press" },
      { name: "Lunge" },
      { name: "Calf Rises" },
    ],
  },
  {
    category: "Abs",
    exercises: [
      { name: "Leg Raise" },
      { name: "Crunch" },
      { name: "Lying Leg Raise" },
    ],
  },
  {
    category: "Other",
    exercises: [{ name: "Shrug" }, { name: "Neck Raise" }, { name: "PP Rise" }],
  },
];
const EXERCISE_WEEK: ExerciseDay[] = [];
EXERCISE_WEEK.push(
  {
    id: "d1",
    name: "Day 1",
    exercises: [
      {
        id: "e1",
        name: "Day 1 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 1 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 1 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 1 Exercise 2a",
      },
    ],
  },
  {
    id: "d2",
    name: "Day 2",
    exercises: [
      {
        id: "e1",
        name: "Day 2 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 2 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 2 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 2 Exercise 2a",
      },
    ],
  },
  {
    id: "d3",
    name: "Day 3",
    exercises: [
      {
        id: "e1",
        name: "Day 3 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 3 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 3 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 3 Exercise 2a",
      },
    ],
  },
  {
    id: "d4",
    name: "Day 4",
    exercises: [
      {
        id: "e1",
        name: "Day 4 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 4 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 4 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 4 Exercise 2a",
      },
    ],
  },
  {
    id: "d5",
    name: "Day 5",
    exercises: [
      {
        id: "e1",
        name: "Day 5 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 5 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 5 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 5 Exercise 2a",
      },
    ],
  },
  {
    id: "d6",
    name: "Day 6",
    exercises: [
      {
        id: "e1",
        name: "Day 6 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 6 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 6 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 6 Exercise 2a",
      },
    ],
  },
  {
    id: "d7",
    name: "Day 7",
    exercises: [
      {
        id: "e1",
        name: "Day 7 Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Day 7 Exercise 1a",
      },
      {
        id: "e2",
        name: "Day 7 Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Day 7 Exercise 2a",
      },
    ],
  }
);
/************************************************************************************************/
function App() {
  const [exerciseWeek, setExerciseWeek] = useState<ExerciseDay[]>([]);
  const [selectedDay, setSelectedDay] = useState<ExerciseDay>(EXERCISE_WEEK[0]);
  const [currentDay, setCurrentDay] = useState<ExerciseDay | undefined>(
    undefined
  );
  //|||||||||||||||||||||||||||||||||||||||||||
  useEffect(() => {
    setExerciseWeek(EXERCISE_WEEK);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/exercises")
  //     .then((res) => res.json())
  //     .then((data) => setExerciseWeek(data));
  // }, []);

  function handleSelectedDay(id: string) {
    setSelectedDay(exerciseWeek.find((x) => x.id === id)!);
  }
  function handleCurrentDay(id: string) {
    setCurrentDay(exerciseWeek.find((x) => x.id === id));
  }
  //|||||||||||||||||||||||||||||||||||||||||||
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <nav className="mainNav">
          <img src={logo} className="App-logo" alt="WM" />
          <Typography
            fontSize={25}
            component="h1"
            color="#eeeeee"
            marginRight="auto"
            marginTop="auto"
            marginBottom="auto"
          >
            Workout Maker
          </Typography>
          <Link to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
          <Link to="/edit">
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
        </nav>

        <Container maxWidth="xl">
          <Routes>
            <Route
              path="/"
              element={
                <Box textAlign="center">
                  <UIExerciseWeek
                    exerciseWeek={exerciseWeek}
                    selectedDay={selectedDay}
                    setSelectedDay={handleSelectedDay}
                  />
                  <UIExerciseDay
                    selectedDay={selectedDay}
                    setSelectedDay={handleSelectedDay}
                    currentDay={currentDay}
                    setCurrentDay={handleCurrentDay}
                  />
                </Box>
              }
            />

            <Route
              path="/edit"
              element={
                <Box textAlign="center">
                  <EditMain
                    exerciseWeek={exerciseWeek}
                    setExerciseWeek={setExerciseWeek}
                    selectedDay={selectedDay}
                    setSelectedDay={handleSelectedDay}
                    EXERCISE_POOL={EXERCISE_POOL}
                    handleSelectedDay={handleSelectedDay}
                  />
                </Box>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
