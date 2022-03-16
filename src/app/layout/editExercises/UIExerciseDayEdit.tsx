import React, { Fragment, useState } from "react";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import {
  Button,
  Container,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
}
const useStyles: any = makeStyles({
  day: {
    fontSize: 20,
    "&:hover": {
      border: "2px solid #ff8400",
    },
    marginTop: 10,
    marginBottom: 10,
    height: 230,
    width: 170,
  },
});

/************************************************************************************************/

export default function UIExerciseDayEdit({ selectedDay }: Props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <Container>
      {selectedDay &&
        selectedDay.exercises.map((exercise) => (
          <Fragment key={exercise.name}>{exercise.name}</Fragment>
        ))}
    </Container>
  );
}
