import React from "react";
//Models
import { ExerciseDay } from "../../../models/exerciseDay";
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
  //|||||||||||||||||||||||||||||||||||||||||||
  return (
    <>
      <Typography fontSize={30} margin={3} color="#ff8400">
        {selectedDay.name} overview:
      </Typography>
      <Typography fontSize={18} margin={2} color="#ffffff">
        Number of exercises:{" "}
        {selectedDay.exercises.reduce(
          (total, exercise) => (total = total + (exercise.superset ? 2 : 1)),
          0
        )}
      </Typography>
      <Typography fontSize={18} margin={2} color="#ffffff">
        Total working sets:{" "}
        {selectedDay.exercises.reduce(
          (total, exercise) =>
            (total = total + exercise.sets * (exercise.superset ? 2 : 1)),
          0
        )}
      </Typography>
      <Typography fontSize={18} margin={2} marginBottom={7} color="#ffffff">
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
        <Typography fontSize={18} margin={6} color="#000000">
          Begin Workout
        </Typography>
      </Button>
    </>
  );
}
