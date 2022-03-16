import React from "react";
import { useTimer } from "react-timer-hook";
//Material UI
import { Button, Typography } from "@mui/material";
/************************************************************************************************/
export default function Timer({
  expiryTimestamp,
  timeS,
  nextExerciseHandler,
}: any) {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => nextExerciseHandler("next"),
  });
  //|||||||||||||||||||||||||||||||||||||||||||
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
