import React, { Fragment } from "react";

// Components
import ExerciseDayMain from "./UIExerciseDay/ExerciseDayMain";
import ExerciseDayList from "./UIExerciseDay/ExerciseDayList";
import ExerciseDayOverView from "./UIExerciseDay/ExerciseDayOverView";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import { Card, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay;
  setSelectedDay: (id: string) => void;
  currentDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
  currentExercise: number;
  setCurrentExercise: any;
}

const useStyles: any = makeStyles((theme) => ({
  exc: {
    backgroundColor: "#00000000",
    borderTop: "2px solid #393E41",
    // borderRadius: 15,
    margin: 3,
  },
  selectedExc: {
    backgroundColor: "#191f27",
    border: "2px solid #e84855",
    borderRadius: 5,
    margin: 3,
  },
  cardlist: {
    // border: "2px solid #333333",
    marginTop: 10,
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
  currentExercise,
  setCurrentExercise,
}: Props) {
  const classes = useStyles();

  //|||||||||||||||||||||||||||||||||||||||||||

  function setCurrentDayHandler(id: string) {
    setCurrentDay(id);
    setCurrentExercise(0);
  }

  const setCurrentExerciseHandler = () => {
    setCurrentExercise((prev: number) => {
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
        {currentExercise === -1 && selectedDay && (
          <Grid item xs={12} md={5} xl={4}>
            <ExerciseDayOverView
              selectedDay={selectedDay}
              setCurrentDay={setCurrentDayHandler}
            />
          </Grid>
        )}
        {currentExercise !== -1 && currentDay && (
          <Grid height={window.innerHeight} item xs={12} md={8} lg={7}>
            <ExerciseDayMain
              currentDay={currentDay}
              currentExercise={currentExercise}
              setCurrentExercise={setCurrentExerciseHandler}
              workoutComplete={workoutCompleteHandler}
            />
          </Grid>
        )}

        <Grid item xs={12} md={5} xl={4} className={classes.cardlist}>
          <>
            {selectedDay.exercises.map((exercise) => (
              <Container key={Math.random() * 1000}>
                {exercise === currentDay?.exercises[currentExercise] ? (
                  <Card className={classes.selectedExc}>
                    <ExerciseDayList exercise={exercise} />
                  </Card>
                ) : (
                  <Card className={classes.exc}>
                    <ExerciseDayList exercise={exercise} />
                  </Card>
                )}
              </Container>
            ))}
          </>
        </Grid>
      </Grid>
    </>
  );
}
