import React from "react";

// Models
import { Exercise } from "../models/exercise";
import { ExerciseDay } from "../models/exerciseDay";

// Material UI
import { Button, Container, Typography } from "@mui/material";
/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  currentDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
  currentExercise: number;
  setCurrentExercise: (this: any) => void;
}

/************************************************************************************************/

export default function UIExerciseDayMain({
  selectedDay,
  currentDay,
  setCurrentDay,
  currentExercise,
  setCurrentExercise,
}: Props) {
  return (
    <Container>
      {currentExercise != -1 && (
        <>
          <Typography variant="h4" margin={2} color="primary">
            {currentDay!.exercises[currentExercise].name}
          </Typography>
          <Typography variant="h6" margin={3} color="#ffffff">
            Sets: {currentDay!.exercises[currentExercise].sets} | Rest Time:{" "}
            {currentDay!.exercises[currentExercise].timeBetween}
          </Typography>
          <Button variant="contained" onClick={setCurrentExercise}>
            <Typography variant="h5" margin={2} color="#000000">
              Next
            </Typography>
          </Button>
        </>
      )}
      {currentExercise === -1 && (
        <>
          <Typography variant="h4" margin={3} color="#ffffff">
            Overview:
          </Typography>
          <Button
            variant="contained"
            onClick={() => setCurrentDay(selectedDay!.id)}
          >
            <Typography variant="h5" margin={2} color="#000000">
              Begin Workout
            </Typography>
          </Button>
        </>
      )}
    </Container>
  );
}
