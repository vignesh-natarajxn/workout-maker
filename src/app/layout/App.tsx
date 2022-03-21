import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../Styles.css";

// Components
import UIExerciseDay from "./startExercises/UIExerciseDay";

// Models
import { ExerciseDay } from "../models/exerciseDay";
import UIEditMain from "./editExercises/UIEditMain";
// Material UI

import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UIBarDrawer from "./startExercises/UIBarDrawer";

/************************************************************************************************/

const theme = createTheme({
  palette: {
    primary: {
      main: "#e84855",
    },
    secondary: {
      main: "#393E41",
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
      { name: "Pushups" },
      { name: "Bench Flys" },
      { name: "Incline Bench Press" },
      { name: "Cable Crossovers" },
      { name: "Machine Flys" },
    ],
  },
  {
    category: "Triceps",
    exercises: [
      { name: "Skullcrushers" },
      { name: "Dips" },
      { name: "Overhead Tricep Extensions" },
    ],
  },
  {
    category: "Shoulders",
    exercises: [
      { name: "Overhead Press" },
      { name: "Lateral Rises" },
      { name: "Arnold Press" },
    ],
  },
  {
    category: "Biceps and Forearms",
    exercises: [
      { name: "Barbell Curls" },
      { name: "Dumbbell Curls" },
      { name: "Alternate Diagonal Curls" },
      { name: "Reverse Curls" },
      { name: "Hammer Curls" },
    ],
  },
  {
    category: "Back",
    exercises: [
      { name: "Rows" },
      { name: "Pullups" },
      { name: "Chinups" },
      { name: "Lat Pulldowns" },
      { name: "Seated Rows" },
      { name: "Rear Delt Flys" },
    ],
  },
  {
    category: "Legs",
    exercises: [
      { name: "Squats" },
      { name: "Deadlifts" },
      { name: "Leg Press" },
      { name: "Lunges" },
      { name: "Calf Rises" },
    ],
  },
  {
    category: "Abs",
    exercises: [
      { name: "Leg Raises" },
      { name: "Crunches" },
      { name: "Lying Leg Raises" },
    ],
  },
  {
    category: "Other",
    exercises: [
      { name: "Shrugs" },
      { name: "Neck Raises" },
      { name: "PP Rises" },
    ],
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

// let profiles: null | string[] = [],
//   keys = Object.keys(localStorage),
//   np = keys.length;

// while (np--) {
//   let temp = localStorage.getItem(keys[np]);
//   if (temp !== null) profiles.push(temp);
// }

/************************************************************************************************/

function App() {
  const [exerciseWeek, setExerciseWeek] = useState<ExerciseDay[]>([]);
  const [selectedDay, setSelectedDay] = useState<ExerciseDay>(EXERCISE_WEEK[0]);
  const navigate = useNavigate();
  const [currentDay, setCurrentDay] = useState<ExerciseDay | undefined>(
    undefined
  );
  const [currentExercise, setCurrentExercise] = useState<number>(-1);

  //|||||||||||||||||||||||||||||||||||||||||||

  useEffect(() => {
    let collection = localStorage.getItem("workoutWeek");
    if (collection === null) {
      setExerciseWeek(EXERCISE_WEEK);
    } else {
      let temp = JSON.parse(collection);
      setExerciseWeek(temp);
      setSelectedDay(temp[0]);
    }
  }, []);

  function storeData() {
    localStorage.setItem("workoutWeek", JSON.stringify(exerciseWeek));
    navigate("/");
  }

  function handleSelectedDay(id: string) {
    setSelectedDay(exerciseWeek.find((x) => x.id === id)!);
  }
  function handleCurrentDay(id: string) {
    setCurrentDay(exerciseWeek.find((x) => x.id === id));
  }

  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <ThemeProvider theme={theme}>
      {currentExercise === -1 && (
        <UIBarDrawer
          exerciseWeek={exerciseWeek}
          selectedDay={selectedDay}
          setSelectedDay={handleSelectedDay}
          navigate={navigate}
        />
      )}

      {/* {profiles !== null && profiles.map((key) => <div>{key}</div>)} */}

      {/* {Object.entries(localStorage).map(([key, valueJSON]) => {
        const value = JSON.parse(valueJSON);

        return <Button variant="contained">{value.name}</Button>;
      })} */}

      <Routes>
        <Route
          path="/"
          element={
            <Box textAlign="center">
              <UIExerciseDay
                currentExercise={currentExercise}
                setCurrentExercise={setCurrentExercise}
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
              <UIEditMain
                exerciseWeek={exerciseWeek}
                setExerciseWeek={setExerciseWeek}
                selectedDay={selectedDay}
                setSelectedDay={handleSelectedDay}
                EXERCISE_POOL={EXERCISE_POOL}
                handleSelectedDay={handleSelectedDay}
                storeData={storeData}
              />
            </Box>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
