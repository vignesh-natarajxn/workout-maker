import React from "react";

// Models
import { Exercise } from "../models/exercise";

// Material UI
import { CardContent, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  exercise: Exercise;
}

/************************************************************************************************/

export default function UIExerciseDayList({ exercise }: Props) {
  return (
    <CardContent>
      <Typography variant="h6" lineHeight={2} color="common.white">
        Sets: {exercise.sets} | Rest Time: {exercise.timeBetween}
      </Typography>
      <Typography align="left" variant="h6" color="common.white">
        {exercise.name}
      </Typography>
      <Typography align="left" variant="h6" color="#b4b4b4">
        {exercise.superset}
      </Typography>
    </CardContent>
  );
}
