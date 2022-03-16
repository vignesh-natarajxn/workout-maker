import React, { Fragment } from "react";

// Components
import UIExerciseWeek from "../startExercises/UIExerciseWeek";
import UIExercisePool from "./UIExercisePool";
import UIExerciseDayEdit from "./UIExerciseDayEdit";

// Models
import { ExerciseDay } from "../../models/exerciseDay";
import { ExercisePool } from "../../models/exercisePool";

// Material UI
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
  setExerciseWeek: (ExerciseWeek: ExerciseDay[]) => void;
  selectedDay: ExerciseDay | undefined;
  setSelectedDay: (id: string) => void;
  EXERCISE_POOL: ExercisePool[];
  handleSelectedDay: (id: string) => void;
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
    border: "2px solid #333333",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  pool: {
    // backgroundColor: "#191f27",
    // border: "2px solid #333333",
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
  handleSelectedDay,
}: Props) {
  const classes = useStyles();
  const [someVar, setSomeVar] = React.useState<boolean>(true);
  const handleExcerciseAdd = (name: string) => {
    let exerciseWeekMod = exerciseWeek;
    exerciseWeekMod
      .find((exerciseDay) => exerciseDay.id === selectedDay?.id)
      ?.exercises.push({
        id: String(Math.random() * 1000),
        name: name,
        timeBetween: 120,
        sets: 3,
        superset: "",
      });
    setExerciseWeek(exerciseWeekMod);

    forceUpdateHandler();
  };
  function forceUpdateHandler(this: any) {
    setSomeVar((prev) => !prev);
  }
  const handleExcerciseEdit = (opr: string, idd: string) => {
    let exerciseWeekMod = exerciseWeek;

    const dayIndex = exerciseWeekMod.findIndex(
      (exerciseDay) => exerciseDay.id === selectedDay?.id
    );
    const exIndex = exerciseWeekMod
      .find((exerciseDay) => exerciseDay.id === selectedDay?.id)!
      .exercises.findIndex((exercise) => exercise.id === idd);

    if (opr === "set-") {
      if (exerciseWeekMod[dayIndex].exercises[exIndex].sets > 0)
        exerciseWeekMod[dayIndex].exercises[exIndex].sets -= 1;
      setExerciseWeek(exerciseWeekMod);
      forceUpdateHandler();
    }
    if (opr === "set+") {
      exerciseWeekMod[dayIndex].exercises[exIndex].sets += 1;
      setExerciseWeek(exerciseWeekMod);
      forceUpdateHandler();
    }
    if (opr === "time-") {
      if (exerciseWeekMod[dayIndex].exercises[exIndex].timeBetween > 0)
        exerciseWeekMod[dayIndex].exercises[exIndex].timeBetween -= 5;
      setExerciseWeek(exerciseWeekMod);
      forceUpdateHandler();
    }
    if (opr === "time+") {
      exerciseWeekMod[dayIndex].exercises[exIndex].timeBetween += 5;
      setExerciseWeek(exerciseWeekMod);
      forceUpdateHandler();
    }
    if (opr === "remove superset") {
      exerciseWeekMod[dayIndex].exercises[exIndex].superset = "";
      setExerciseWeek(exerciseWeekMod);
      forceUpdateHandler();
    }
  };

  return (
    <>
      <Typography variant="h5" margin={1} color="#ffffff">
        Edit Workout
      </Typography>
      <UIExerciseWeek
        exerciseWeek={exerciseWeek}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <Grid container justifyContent="center">
        <Grid item xs={4} className={classes.day}>
          <UIExerciseDayEdit
            exerciseWeek={exerciseWeek}
            selectedDay={selectedDay}
            handleExcerciseEdit={handleExcerciseEdit}
          />
        </Grid>
        <Grid item xs={4} className={classes.pool}>
          <UIExercisePool
            EXERCISE_POOL={EXERCISE_POOL}
            handleExcerciseAdd={handleExcerciseAdd}
            forceUpdateHandler={forceUpdateHandler}
          />
        </Grid>
      </Grid>
    </>
  );
}
