import React from "react";

// Models
import { Exercise } from "../models/exercise";
import { ExerciseDay } from '../models/exerciseDay'

// Material UI
import { Button, Container, Typography } from "@mui/material";
/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
  currentExercise: Exercise | undefined;
  setCurrentExercise: (id: string) => void;
}

/************************************************************************************************/

export default function UIExerciseDayMain({
  selectedDay,
  setCurrentDay,
  currentExercise,
  setCurrentExercise,
}: Props) {



  return (
    <Container>
      {currentExercise ? (
        <>
          <Typography variant="h4" margin={2} color="primary">
            {currentExercise.name}
          </Typography>
          <Typography variant="h6" color="#ffffff">
            Sets: {currentExercise.sets} | Rest Time:{" "}  
            {currentExercise.timeBetween}
          </Typography>
          <Button variant="contained" onClick={() => (setCurrentExercise(selectedDay!.id))}>
            <Typography variant="h5" margin={2} color="#000000">
              Next
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4" margin={3} color="#ffffff">
            Overview:
          </Typography>
          <Button variant="contained" onClick={() => (setCurrentDay(selectedDay!.id))}>
            <Typography variant="h5" margin={2} color="#000000">
              Begin Workout
            </Typography>
          </Button>
        </>
      )}
    </Container>
  );
}
