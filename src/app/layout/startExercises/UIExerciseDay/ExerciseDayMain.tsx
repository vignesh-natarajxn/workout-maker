import { useState } from "react";

// Components
import Timer from "./ExerciseDayMain/Timer";
import Completed from "./ExerciseDayMain/Completed";

// Models
import { ExerciseDay } from "../../../models/exerciseDay";

// Material UI
import { Button, Fade, ListItem, Typography } from "@mui/material";

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

  //|||||||||||||||||||||||||||||||||||||||||||

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

  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <Fade in timeout={{ enter: 700 }}>
      <div>
        <audio src="/done.mp3" autoPlay />
        {currentExercise === 1000 && (
          <Completed
            currentDay={currentDay}
            workoutComplete={workoutComplete}
          />
        )}
        {currentExercise !== 1000 && (
          <>
            <ListItem>
              {superset ? (
                <Typography fontSize={30} marginRight="auto" color="#b4b4b4">
                  {currentDay.exercises[currentExercise].superset}
                </Typography>
              ) : (
                <Typography fontSize={30} marginRight="auto" color="primary">
                  {currentDay.exercises[currentExercise].name}
                </Typography>
              )}
              <Button
                variant="contained"
                onClick={() => workoutComplete(currentDay!.id)}
              >
                Cancel
              </Button>
            </ListItem>
            <ListItem>
              <Typography textAlign="left" color="#cccccc">
                {superset
                  ? "Superset"
                  : currentDay.exercises[currentExercise].superset
                  ? "Has superset"
                  : "No superset"}
              </Typography>
            </ListItem>
            <Typography fontSize={25} margin={2} color="#ffffff">
              Current Set: {set}
            </Typography>
            <Typography margin={2} color="#ffffff">
              Sets: {currentDay.exercises[currentExercise].sets} | Rest Time:{" "}
              {currentDay.exercises[currentExercise].timeBetween}
            </Typography>
            <img></img>
            {showTimer ? (
              <>
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
                <Typography marginTop={3}></Typography>
                <Button
                  variant="outlined"
                  onClick={() => nextExerciseHandler("next")}
                >
                  <Typography margin={2} color="#ffffff">
                    Force Next
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  onClick={() => nextExerciseHandler("timer")}
                >
                  <Typography margin={8} color="#ffffff">
                    Next
                  </Typography>
                </Button>
              </>
            )}
          </>
        )}
      </div>
    </Fade>
  );
}
