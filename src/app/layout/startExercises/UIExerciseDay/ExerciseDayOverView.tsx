import { useState } from "react";

//Models
import { ExerciseDay } from "../../../models/exerciseDay";

//Material UI
import { Button, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay;
  setCurrentDay: (id: string) => void;
}

/************************************************************************************************/

export default function UIExerciseDayOverView({
  selectedDay,
  setCurrentDay,
}: Props) {
  const [displayNoExc, setDisplayNoExc] = useState<boolean>(false);

  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <>
      <Typography fontSize={30} margin={3} color="#e84855">
        {selectedDay.name} overview:
      </Typography>
      <Typography margin={2} color="#ffffff">
        Number of exercises:{" "}
        {selectedDay.exercises.reduce(
          (total, exercise) => (total = total + (exercise.superset ? 2 : 1)),
          0
        )}
      </Typography>
      <Typography margin={2} color="#ffffff">
        Total working sets:{" "}
        {selectedDay.exercises.reduce(
          (total, exercise) =>
            (total = total + exercise.sets * (exercise.superset ? 2 : 1)),
          0
        )}
      </Typography>
      <Typography margin={2} marginBottom={4} color="#ffffff">
        Time Estimation:{" "}
        {selectedDay.exercises
          .reduce(
            (total, exercise) =>
              (total =
                total +
                (exercise.sets *
                  (exercise.timeBetween + 45) *
                  (exercise.superset ? 2 : 1)) /
                  60),
            0
          )
          .toFixed(0)}{" "}
        minutes
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          if (selectedDay.exercises.length !== 0) {
            setDisplayNoExc(false);
            return setCurrentDay(selectedDay.id);
          } else {
            setDisplayNoExc(true);
            return;
          }
        }}
      >
        <Typography margin={3} color="#000000">
          Begin Workout
        </Typography>
      </Button>
      <Typography margin={4}></Typography>
      {displayNoExc && (
        <Typography margin={2} marginBottom={6} color="#ffffff">
          Add exercises to start.
        </Typography>
      )}
    </>
  );
}
