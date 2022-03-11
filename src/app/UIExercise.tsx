import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Exercise } from "./models/exercise";

interface Props {
  currentExercise: Exercise | undefined;
}

const useStyles: any = makeStyles((theme) => ({
  color: {
    backgroundColor: "#191f27",
    // border: "2px solid #ff8400",
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default function UIExercise({ currentExercise }: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.color} item xs={8}>
      <Container>
        {currentExercise ? (
          <>
            <Typography variant="h4" margin={5} color="primary">
              {currentExercise.name}
            </Typography>
            <Typography align="left" variant="h6">
              {currentExercise.timeBetween}
            </Typography>
            <Typography align="left" variant="h6">
              {currentExercise.sets}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h4" margin={5} color="primary">
              --
            </Typography>
            <Typography align="left" variant="h6">
              --
            </Typography>
            <Typography align="left" variant="h6">
              --
            </Typography>
          </>
        )}
      </Container>
    </Grid>
  );
}
