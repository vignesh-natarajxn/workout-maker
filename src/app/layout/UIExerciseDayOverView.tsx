import React from "react";

//Models
import { ExerciseDay } from "../models/exerciseDay";

//Material UI
import { Button, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay;
  setCurrentDay: (id: string) => void;
}

/************************************************************************************************/

export default function UIExerciseDayOverView({
  selectedDay,
  setCurrentDay,
}: Props) {
  return (
    <>
      <Typography variant="h4" margin={3} color="#ff8400">
        {selectedDay.name} overview:
      </Typography>
      <Typography variant="h6" margin={2} color="#ffffff">
        Number of exercises:{" "}
        {selectedDay.exercises.reduce(
          (total, exercise) => (total = total + (exercise.superset ? 2 : 1)),
          0
        )}
      </Typography>
      <Typography variant="h6" margin={2} color="#ffffff">
        Total working sets:{" "}
        {selectedDay.exercises.reduce(
          (total, exercise) =>
            (total = total + exercise.sets * (exercise.superset ? 2 : 1)),
          0
        )}
      </Typography>
      <Typography variant="h6" margin={2} color="#ffffff">
        Time Estimation:{" "}
        {selectedDay.exercises
          .reduce(
            (total, exercise) =>
              (total =
                total +
                (exercise.sets *
                  (exercise.timeBetween + 45) *
                  (exercise.superset ? 2 : 1)) /
                  60),
            0
          )
          .toFixed(0)}{" "}
        minutes
      </Typography>
      <Button variant="contained" onClick={() => setCurrentDay(selectedDay.id)}>
        <Typography variant="h5" margin={2} color="#000000">
          Begin Workout
        </Typography>
      </Button>
    </>
  );
}
