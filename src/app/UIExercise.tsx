import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Exercise } from "./models/exercise";

interface Props {
  currentExercise: Exercise | undefined;
  setCurrentExercise: any;
}

const useStyles: any = makeStyles((theme) => ({
  color: {
    backgroundColor: "#191f27",
    border: "2px solid #333333",
    marginTop: 20,
    marginBottom: 20,
    minHeight: 400,
  },
}));

export default function UIExercise({
  currentExercise,
  setCurrentExercise,
}: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.color} item xs={8}>
      <Container>
        {currentExercise ? (
          <>
            <Typography variant="h4" margin={2} color="primary">
              {currentExercise.name}
            </Typography>
            <Typography variant="h6" color="#ffffff">
              Sets: {currentExercise.sets} | Rest Time: {currentExercise.timeBetween}
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
    </Grid>
  );
}
