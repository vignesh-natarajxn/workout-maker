import React from "react";

// Components
import UIExerciseWeek from "../startExercises/UIExerciseWeek";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import { Button, Container, Grid, Typography } from "@mui/material";
import { ExercisePool } from "../../models/exercisePool";

/************************************************************************************************/

interface Props {
  EXERCISE_POOL: ExercisePool[];
}

/************************************************************************************************/

export default function UIExercisePool({ EXERCISE_POOL }: Props) {
  return (
    <>
      {EXERCISE_POOL.map((category) => (
        <Container>{category.category}
        </Container>
      ))}
    </>
  );
}
