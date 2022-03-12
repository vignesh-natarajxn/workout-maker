import React, { useState } from "react";

// Models
import { Exercise } from "../models/exercise";
import { ExerciseDay } from "../models/exerciseDay";

// Material UI
import { Button, Container, Typography } from "@mui/material";
import Timer from "./UIExerciseDayMain/Timer";
import MainDefault from "./UIExerciseDayMain/MainDefault";
import Completed from "./UIExerciseDayMain/Completed";
/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  currentDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
  currentExercise: number;
  setCurrentExercise: () => void;
  workoutComplete: (id: string) => void;
}

/************************************************************************************************/

export default function UIExerciseDayMain({
  selectedDay,
  currentDay,
  setCurrentDay,
  currentExercise,
  setCurrentExercise,
  workoutComplete,
}: Props) {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [superset, setSuperset] = useState<boolean>(false);

  const nextExerciseHandler = (opr: string) => {
    if (opr === "next") {
      setCurrentExercise();
      setShowTimer(false);
      setSuperset(false);
    } else if (opr === "" || opr === "timer") {
      setShowTimer(true);
      setSuperset(false);
    } else {
      setSuperset(true);
    }
  };

  return (
    <Container>
      {currentExercise === 1000 && (
        <Completed workoutComplete={workoutComplete} currentDay={currentDay} />
      )}
      {currentExercise != -1 && currentExercise != 1000 && (
        <>
          {superset ? (
            <Typography variant="h4" margin={2} color="#b4b4b4">
              {currentDay!.exercises[currentExercise].superset}
            </Typography>
          ) : (
            <Typography variant="h4" margin={2} color="primary">
              {currentDay!.exercises[currentExercise].name}
            </Typography>
          )}
          <Typography variant="h6" margin={3} color="#ffffff">
            Sets: {currentDay!.exercises[currentExercise].sets} | Rest Time:{" "}
            {currentDay!.exercises[currentExercise].timeBetween}
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
                      currentDay!.exercises[currentExercise].timeBetween
                  );
                  return time;
                }}
                timeS={currentDay!.exercises[currentExercise].timeBetween}
                nextExerciseHandler={nextExerciseHandler}
              />
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() =>
                nextExerciseHandler(
                  !superset
                    ? currentDay!.exercises[currentExercise].superset
                    : "timer"
                )
              }
            >
              <Typography variant="h5" margin={2} color="#000000">
                Next
              </Typography>
            </Button>
          )}
        </>
      )}
      {currentExercise === -1 && (
        <MainDefault selectedDay={selectedDay} setCurrentDay={setCurrentDay} />
      )}
    </Container>
  );
}
