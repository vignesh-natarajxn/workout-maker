import React, { useState } from "react";

// Models
import { ExerciseDay } from "../models/exerciseDay";

// Material UI
import { Button, Container, Typography } from "@mui/material";
import Timer from "./UIExerciseDayMain/Timer";
import Completed from "./UIExerciseDayMain/Completed";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  currentDay: ExerciseDay;
  setCurrentDay: (id: string) => void;
  currentExercise: number;
  setCurrentExercise: () => void;
  workoutComplete: (id: string) => void;
}

/************************************************************************************************/

export default function UIExerciseDayMain({
  currentDay,
  currentExercise,
  setCurrentExercise,
  workoutComplete,
}: Props) {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [superset, setSuperset] = useState<boolean>(false);
  const [sets, setSets] = useState<number>(1);

  const nextExerciseHandler = (opr: string) => {
    if (opr === "timer") {
      if (currentDay.exercises[currentExercise].superset && !superset) {
        setSuperset(true);
      } else setShowTimer(true);
    }
    if (opr === "next") {
      if (currentDay.exercises[currentExercise].superset) {
        if (superset) {
          setSuperset(false);
          setShowTimer(false);
        } else {
          setSuperset(true);
          setShowTimer(false);
          return;
        }
      }
      if (sets < currentDay.exercises[0].sets) {
        setSets((x) => x + 1);
        setShowTimer(false);
      } else {
        setCurrentExercise();
        setSets(1);
        setShowTimer(false);
      }
    }
  };

  return (
    <Container>
      {currentExercise === 1000 && (
        <Completed currentDay={currentDay} workoutComplete={workoutComplete} />
      )}
      {currentExercise !== 1000 && (
        <>
          {superset ? (
            <Typography variant="h4" margin={2} color="#b4b4b4">
              {currentDay.exercises[currentExercise].superset}
            </Typography>
          ) : (
            <Typography variant="h4" margin={2} color="primary">
              {currentDay.exercises[currentExercise].name}
            </Typography>
          )}
          <Typography variant="h6" margin={3} color="#ffffff">
            Sets: {currentDay.exercises[currentExercise].sets} | Rest Time:{" "}
            {currentDay.exercises[currentExercise].timeBetween}
          </Typography>
          {showTimer ? (
            <>
              <Button
                variant="contained"
                onClick={() => nextExerciseHandler("next")}
              >
                <Typography variant="h5" margin={2} color="#000000">
                  Force Next
                </Typography>
              </Button>
              <Timer
                expiryTimestamp={() => {
                  const time = new Date();
                  time.setSeconds(
                    time.getSeconds() +
                      currentDay.exercises[currentExercise].timeBetween
                  );
                  return time;
                }}
                timeS={currentDay.exercises[currentExercise].timeBetween}
                nextExerciseHandler={nextExerciseHandler}
              />
            </>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={() => nextExerciseHandler("timer")}
              >
                <Typography variant="h5" margin={2} color="#000000">
                  Next
                </Typography>
              </Button>
            </>
          )}
        </>
      )}
    </Container>
  );
}
