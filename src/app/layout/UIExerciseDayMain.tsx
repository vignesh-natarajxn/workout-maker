import React from "react";

// Models
import { Exercise } from "../models/exercise";

// Material UI
import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
/************************************************************************************************/

interface Props {
  currentExercise: Exercise | undefined;
  setCurrentExercise: any;
}

/************************************************************************************************/

export default function UIExerciseDayMain({
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
        </>
      ) : (
        <>
          <Typography variant="h4" margin={3} color="#ffffff">
            Overview:
          </Typography>
          <Button variant="contained" onClick={setCurrentExercise}>
            <Typography variant="h5" margin={2} color="#000000">
              Begin Workout
            </Typography>
          </Button>
        </>
      )}
    </Container>
  );
}
