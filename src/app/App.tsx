import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./Styles.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ExerciseDay } from "./models/exerciseDay";
import UIExerciseWeek from "./layout/UIExerciseWeek";
import { Box, Container, Typography } from "@mui/material";
import UIExerciseDay from "./layout/UIExerciseDay";

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

const EXERCISE_WEEK: ExerciseDay[] = [];

EXERCISE_WEEK.push(
  {
    id: "d1",
    name: "Day 1",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  },
  {
    id: "d2",
    name: "Day 2",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  },
  {
    id: "d3",
    name: "Day 3",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  },
  {
    id: "d4",
    name: "Day 4",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  },
  {
    id: "d5",
    name: "Day 5",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  },
  {
    id: "d6",
    name: "Day 6",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  },
  {
    id: "d7",
    name: "Day 7",
    exercises: [
      {
        name: "Exercise 1",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 1a",
      },
      {
        name: "Exercise 2",
        timeBetween: 120,
        sets: 3,
        superset: "Exercise 2a",
      },
    ],
  }
);

function App() {
  const [exerciseWeek, setExerciseWeek] = useState<ExerciseDay[]>([]);
  const [selectedDay, setSelectedDay] = useState<ExerciseDay | undefined>(
    undefined
  );
  const [currentDay, setCurrentDay] = useState<ExerciseDay | undefined>(
    undefined
  );
  useEffect(() => {
    setExerciseWeek(EXERCISE_WEEK);
    setSelectedDay(EXERCISE_WEEK[0]);
    setCurrentDay(EXERCISE_WEEK[0]);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhos:8000/exercises")
  //     .then((res) => res.json())
  //     .then((data) => setExerciseWeek(data));
  // }, []);

  function handleSelectedDay(id: string) {
    setSelectedDay(exerciseWeek.find((x) => x.id === id));
  }
  function handleCurrentDay(id: string) {
    setCurrentDay(exerciseWeek.find((x) => x.id === id));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Box textAlign="center">
          <Typography
            className="App-header"
            variant="h5"
            align="center"
            color="common.white"
            gutterBottom
          >
            <img src={logo} className="App-logo" />
            Workout Maker
          </Typography>

          <UIExerciseWeek
            exerciseWeek={exerciseWeek}
            selectedDay={selectedDay}
            currentDay={currentDay}
            setSelectedDay={handleSelectedDay}
            setCurrentDay={handleCurrentDay}
          />

          <UIExerciseDay
            selectedDay={selectedDay}
            setSelectedDay={handleSelectedDay}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
