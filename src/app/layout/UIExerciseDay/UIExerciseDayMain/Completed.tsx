import React from "react";

// Models
import { ExerciseDay } from "../../../models/exerciseDay";

// Material UI
import { Button, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  currentDay: ExerciseDay | undefined;
  workoutComplete: (id: string) => void;
}

/************************************************************************************************/

export default function Completed({ currentDay, workoutComplete }: Props) {
  return (
    <>
      <Typography variant="h4" margin={3} color="#ffffff">
        Completed!
      </Typography>
      <Button
        variant="contained"
        onClick={() => workoutComplete(currentDay!.id)}
      >
        <Typography variant="h5" margin={2} color="#000000">
          Choose Next Workout
        </Typography>
      </Button>
    </>
  );
}
