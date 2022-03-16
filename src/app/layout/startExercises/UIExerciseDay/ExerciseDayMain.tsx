import React, { useState } from "react";

// Components
import Timer from "./ExerciseDayMain/Timer";
import Completed from "./ExerciseDayMain/Completed";

// Models
import { ExerciseDay } from "../../../models/exerciseDay";

// Material UI
import { Button, Container, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  currentDay: ExerciseDay;
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
  const [set, setSet] = useState<number>(1);

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
      if (set < currentDay.exercises[0].sets) {
        setSet((x) => x + 1);
        setShowTimer(false);
      } else {
        setCurrentExercise();
        setSet(1);
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
              <Typography variant="h6" margin={3} color="#ffffff">
                Current Set: {set}
              </Typography>
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
              <Typography variant="h6" margin={3} color="#ffffff">
                Current Set: {set}
              </Typography>
            </>
          )}
        </>
      )}
    </Container>
  );
}
