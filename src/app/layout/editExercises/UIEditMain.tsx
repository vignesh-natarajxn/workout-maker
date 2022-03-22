import { useState } from "react";

// Components
import UIExercisePool from "./UIExercisePool";
import UIExerciseDayEdit from "./UIExerciseDayEdit";

// Models
import { ExerciseDay } from "../../models/exerciseDay";
import { ExercisePool } from "../../models/exercisePool";

// Material UI
import { Fade, Grid, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
  setExerciseWeek: (ExerciseWeek: ExerciseDay[]) => void;
  selectedDay: ExerciseDay | undefined;
  setSelectedDay: (id: string) => void;
  EXERCISE_POOL: ExercisePool[];
  handleSelectedDay: (id: string) => void;
  storeData: () => void;
}

/************************************************************************************************/

export default function EditMain({
  exerciseWeek,
  setExerciseWeek,
  selectedDay,
  EXERCISE_POOL,
  storeData,
}: Props) {
  const [someVar, setSomeVar] = useState<boolean>(true);
  const [exercisePool, setExercisePool] = useState<string[]>(["", ""]);

  //|||||||||||||||||||||||||||||||||||||||||||

  function forceUpdateHandler(this: any) {
    setSomeVar((prev) => !prev);
  }

  const handleExcerciseAdd = (name: string) => {
    const indexx = exerciseWeek
      .find((exerciseDay) => exerciseDay.id === selectedDay?.id)!
      .exercises.findIndex((exercise) => exercise.id === exercisePool[1]);
    let exerciseWeekMod = exerciseWeek;
    if (exercisePool[0] === "superset") {
      const dayIndex = exerciseWeekMod.findIndex(
        (exerciseDay) => exerciseDay.id === selectedDay?.id
      );
      exerciseWeekMod[dayIndex].exercises[indexx].superset = name;
    }
    if (exercisePool[0] === "exercise") {
      exerciseWeekMod
        .find((exerciseDay) => exerciseDay.id === selectedDay?.id)
        ?.exercises.splice(indexx + 1, 0, {
          id: String(Math.random() * 1000),
          name: name,
          timeBetween: 120,
          sets: 3,
          superset: "",
        });
    }
    setExerciseWeek(exerciseWeekMod);
    setExercisePool(["", ""]);
    forceUpdateHandler();
  };

  const handleExcerciseEdit = (opr: string, idd: string) => {
    let exerciseWeekMod = exerciseWeek;
    const dayIndex = exerciseWeekMod.findIndex(
      (exerciseDay) => exerciseDay.id === selectedDay?.id
    );
    let exIndex = exerciseWeekMod
      .find((exerciseDay) => exerciseDay.id === selectedDay?.id)!
      .exercises.findIndex((exercise) => exercise.id === idd);

    if (idd === "noelements") exIndex = 0;

    if (opr === "set-") {
      if (exerciseWeekMod[dayIndex].exercises[exIndex].sets > 0)
        exerciseWeekMod[dayIndex].exercises[exIndex].sets -= 1;
      setExerciseWeek(exerciseWeekMod);
    }
    if (opr === "set+") {
      exerciseWeekMod[dayIndex].exercises[exIndex].sets += 1;
      setExerciseWeek(exerciseWeekMod);
    }
    if (opr === "time-") {
      if (exerciseWeekMod[dayIndex].exercises[exIndex].timeBetween > 0)
        exerciseWeekMod[dayIndex].exercises[exIndex].timeBetween -= 15;
      setExerciseWeek(exerciseWeekMod);
    }
    if (opr === "time+") {
      exerciseWeekMod[dayIndex].exercises[exIndex].timeBetween += 15;
      setExerciseWeek(exerciseWeekMod);
    }
    if (opr === "remove") {
      exerciseWeekMod[dayIndex].exercises.splice(exIndex, 1);
    }
    if (opr === "remove superset") {
      exerciseWeekMod[dayIndex].exercises[exIndex].superset = "";
      setExerciseWeek(exerciseWeekMod);
    }
    if (opr === "add") {
      setExercisePool(["exercise", idd]);
    }
    if (opr === "add superset") {
      setExercisePool(["superset", idd]);
    }

    if (opr === "edit day name") {
      exerciseWeekMod[dayIndex].name = idd;
      setExerciseWeek(exerciseWeekMod);
    }

    forceUpdateHandler();
  };

  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <>
      <Typography margin={6}></Typography>
      <Grid container justifyContent="center">
        {exercisePool[0] ? (
          <Fade in timeout={{ enter: 700 }}>
            <Grid item xs={12} md={5} xl={4}>
              <UIExercisePool
                EXERCISE_POOL={EXERCISE_POOL}
                handleExcerciseAdd={handleExcerciseAdd}
                setExercisePool={setExercisePool}
              />
            </Grid>
          </Fade>
        ) : (
          <Fade in timeout={{ enter: 700 }}>
            <Grid item xs={12} md={5} xl={4}>
              <UIExerciseDayEdit
                exerciseWeek={exerciseWeek}
                selectedDay={selectedDay}
                handleExcerciseEdit={handleExcerciseEdit}
                storeData={storeData}
              />
            </Grid>
          </Fade>
        )}
      </Grid>
    </>
  );
}
