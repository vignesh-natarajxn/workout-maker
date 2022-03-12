import React, { useEffect, useState } from "react";

// Components
import UIExerciseDayMain from "./UIExerciseDayMain";
import UIExerciseDayList from "./UIExerciseDayList";

// Models
import { ExerciseDay } from "../models/exerciseDay";
import { Exercise } from "../models/exercise";

// Material UI
import { Card, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  setSelectedDay: (id: string) => void;
  currentDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
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
  card: {
    backgroundColor: "#191f27",
    border: "2px solid #333333",
    marginTop: 20,
    marginBottom: 20,
    maxHeight: 400,
  },
}));

/************************************************************************************************/

export default function UIExerciseDay({
  selectedDay,
  setSelectedDay,
  currentDay,
  setCurrentDay,
}: Props) {
  const [currentExercise, setCurrentExercise] = useState<number>(-1);

  function setCurrentDayHandler(id: string) {
    setCurrentDay(id);
    setCurrentExercise(0);
  }

  const setCurrentExerciseHandler = () => {
    setCurrentExercise((prev) => {
      if (prev >= currentDay!.exercises.length - 1) {
        return -1;
      } else return prev + 1;
    });
    setSelectedDay(currentDay!.id);
  };

  const classes = useStyles();

  return (
    <>
      {selectedDay && (
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={4}>
            <Container>
              <Typography variant="h4" margin={3} color="primary">
                {selectedDay.name}
              </Typography>
              {selectedDay.exercises.map((exercise) => (
                <>
                  {exercise === currentDay?.exercises[currentExercise] ? (
                    <Card className={classes.selectedExc}>
                      <UIExerciseDayList
                        key={exercise.name}
                        exercise={exercise}
                      />
                    </Card>
                  ) : (
                    <Card className={classes.exc}>
                      <UIExerciseDayList
                        key={exercise.name}
                        exercise={exercise}
                      />
                    </Card>
                  )}
                </>
              ))}
            </Container>
          </Grid>
          <Grid item xs={8} className={classes.card}>
            <UIExerciseDayMain
              selectedDay={selectedDay}
              currentDay={currentDay}
              setCurrentDay={setCurrentDayHandler}
              currentExercise={currentExercise}
              setCurrentExercise={setCurrentExerciseHandler}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
