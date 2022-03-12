import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

// Models
import { Exercise } from "../models/exercise";
import { ExerciseDay } from "../models/exerciseDay";

// Material UI
import { Button, Container, Typography } from "@mui/material";
/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  currentDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
  currentExercise: number;
  setCurrentExercise: () => void;
  workoutComplete: (id: string) => void;
}

function MyTimer({ expiryTimestamp, timeS, nextExerciseHandler }: any) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => nextExerciseHandler("next"),
    });

  return (
    <div style={{ textAlign: "center" }}>
      {isRunning ? (
        <Typography variant="h1" margin={2} color="#ffffff">
          {minutes} : {seconds}
        </Typography>
      ) : (
        <Typography variant="h1" margin={2} color="#ff0000">
          {minutes} : {seconds}
        </Typography>
      )}

      <Button
        onClick={() => {
          return isRunning ? pause() : resume();
        }}
      >
        Pause/Resume
      </Button>
      <Button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + timeS);
          restart(time);
        }}
      >
        Restart
      </Button>
    </div>
  );
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

  const nextExerciseHandler = (op: string) => {
    if (op === "next") {
      setCurrentExercise();
      setShowTimer(false);
      setSuperset(false);
    } else if (op === "" || op === "timer") {
      setShowTimer(true);
      setSuperset(false);
    } else {
      setSuperset(true);
    }
  };

  return (
    <Container>
      {currentExercise === 1000 && (
        <>
          <Typography variant="h4" margin={3} color="#ffffff">
            Completed!
          </Typography>
          <Button
            variant="contained"
            onClick={() => workoutComplete(currentDay!.id)}
          >
            <Typography variant="h5" margin={2} color="#000000">
              Begin New Workout
            </Typography>
          </Button>
        </>
      )}
      {currentExercise != -1 && currentExercise != 1000 && (
        <>
          {/* {currentExercise < 2000 && ( */}
          <>
            {superset ? (
              <Typography variant="h4" margin={2} color="primary">
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
                <MyTimer
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
          {/* )} */}
          {/* {currentExercise >= 2000 && (
            <>
              <Typography variant="h4" margin={2} color="primary">
                {currentDay!.exercises[currentExercise - 2000].superset}
              </Typography>
              <Typography variant="h6" margin={3} color="#ffffff">
                Sets: {currentDay!.exercises[currentExercise - 2000].sets} |
                Rest Time:{" "}
                {currentDay!.exercises[currentExercise - 2000].timeBetween}
              </Typography>
              <Button variant="contained" onClick={setCurrentExercise}>
                <Typography variant="h5" margin={2} color="#000000">
                  Next
                </Typography>
              </Button>
            </>
          )} */}
        </>
      )}
      {currentExercise === -1 && (
        <>
          <Typography variant="h4" margin={3} color="#ff8400">
            {selectedDay?.name} overview:
          </Typography>
          <Typography variant="h5" margin={3} color="#ffffff">
            Number of exercises: {selectedDay!.exercises.length}
          </Typography>
          <Typography variant="h5" margin={3} color="#ffffff">
            Total working sets:{" "}
            {selectedDay!.exercises.reduce(
              (total, exercise) => (total = total + exercise.sets),
              0
            )}
          </Typography>
          <Typography variant="h5" margin={3} color="#ffffff">
            Time Estimation:{" "}
            {(
              (selectedDay!.exercises.length *
                selectedDay!.exercises[0].sets *
                (selectedDay!.exercises[0].timeBetween + 50)) /
              60
            ).toFixed(0)}{" "}
            minutes
          </Typography>
          <Button
            variant="contained"
            onClick={() => setCurrentDay(selectedDay!.id)}
          >
            <Typography variant="h5" margin={2} color="#000000">
              Begin Workout
            </Typography>
          </Button>
        </>
      )}
    </Container>
  );
}
