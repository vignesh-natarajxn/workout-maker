import React, { Fragment } from "react";

// Components
import UIExerciseWeek from "../startExercises/UIExerciseWeek";
import UIExercisePool from "./UIExercisePool";

// Models
import { ExerciseDay } from "../../models/exerciseDay";
import { Exercise } from "../../models/exercise";
import { ExercisePool } from "../../models/exercisePool";

// Material UI
import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
  setExerciseWeek: (ExerciseWeek: ExerciseDay[]) => void;
  selectedDay: ExerciseDay | undefined;
  setSelectedDay: (id: string) => void;
  EXERCISE_POOL: ExercisePool[];
}

const useStyles: any = makeStyles((theme) => ({
  exc: {
    backgroundColor: "#0d1117",
    border: "2px solid #333333",
  },
  selectedExc: {
    backgroundColor: "#191f27",
    border: "2px solid #ff8400",
  },
  day: {
    backgroundColor: "#191f27",
    border: "2px solid #ff8400",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  pool: {
    backgroundColor: "#191f27",
    border: "2px solid #333333",
    marginTop: 20,
    marginBottom: 20,
    height: 800,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
}));

/************************************************************************************************/

export default function EditMain({
  exerciseWeek,
  setExerciseWeek,
  selectedDay,
  setSelectedDay,
  EXERCISE_POOL,
}: Props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" margin={4} color="#ffffff">
        Edit Workout
      </Typography>
      <UIExerciseWeek
        exerciseWeek={exerciseWeek}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <Grid container justifyContent="center">
        <Grid item xs={4} className={classes.day}>
          <Container>
            {selectedDay &&
              selectedDay.exercises.map((exercise) => <Fragment key={exercise.name}>{exercise.name}</Fragment>)}
          </Container>
        </Grid>
        <Grid item xs={4} className={classes.pool}>
          <UIExercisePool EXERCISE_POOL={EXERCISE_POOL} />
        </Grid>
      </Grid>
    </>
  );
}
