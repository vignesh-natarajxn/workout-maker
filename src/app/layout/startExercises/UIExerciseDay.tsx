import React, { Fragment, useState } from "react";
// Components
import ExerciseDayMain from "./UIExerciseDay/ExerciseDayMain";
import ExerciseDayList from "./UIExerciseDay/ExerciseDayList";
import ExerciseDayOverView from "./UIExerciseDay/ExerciseDayOverView";
// Models
import { ExerciseDay } from "../../models/exerciseDay";
// Material UI
import { Card, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
/************************************************************************************************/
interface Props {
  selectedDay: ExerciseDay;
  setSelectedDay: (id: string) => void;
  currentDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
}

const useStyles: any = makeStyles((theme) => ({
  exc: {
    backgroundColor: "#0d1117",
    border: "2px solid #0d1117",
    borderRadius: 15,
    margin: 3,
  },
  selectedExc: {
    backgroundColor: "#191f27",
    border: "2px solid #ff8400",
    borderRadius: 15,
    margin: 3,
  },
  card: {
    backgroundColor: "#191f27",
    border: "2px solid #333333",
    marginTop: 20,
    height: 500,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  cardlist: {
    border: "2px solid #333333",
    marginTop: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 15,
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
  const classes = useStyles();
  //|||||||||||||||||||||||||||||||||||||||||||
  function setCurrentDayHandler(id: string) {
    setCurrentDay(id);
    setCurrentExercise(0);
  }

  const setCurrentExerciseHandler = () => {
    setCurrentExercise((prev) => {
      if (prev >= currentDay!.exercises.length - 1) return 1000;
      else return prev + 1;
    });
    setSelectedDay(currentDay!.id);
  };

  const workoutCompleteHandler = () => {
    setCurrentExercise(-1);
  };
  //|||||||||||||||||||||||||||||||||||||||||||
  return (
    <>
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={7} className={classes.card}>
          {currentExercise === -1 && selectedDay && (
            <ExerciseDayOverView
              selectedDay={selectedDay}
              setCurrentDay={setCurrentDayHandler}
            />
          )}
          {currentExercise !== -1 && currentDay && (
            <ExerciseDayMain
              currentDay={currentDay}
              currentExercise={currentExercise}
              setCurrentExercise={setCurrentExerciseHandler}
              workoutComplete={workoutCompleteHandler}
            />
          )}
        </Grid>
        <Grid item xs={5} className={classes.cardlist}>
          <>
            {selectedDay.exercises.map((exercise) => (
              <Fragment key={exercise.name + " " + exercise.superset}>
                {exercise === currentDay?.exercises[currentExercise] ? (
                  <Card className={classes.selectedExc}>
                    <ExerciseDayList exercise={exercise} />
                  </Card>
                ) : (
                  <Card className={classes.exc}>
                    <ExerciseDayList exercise={exercise} />
                  </Card>
                )}
              </Fragment>
            ))}
          </>
        </Grid>
      </Grid>
    </>
  );
}
