import React, { Fragment, useState } from "react";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
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

export default function UIExerciseDayEdit({
  exerciseWeek,
  selectedDay,
}: Props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <Container>
      {selectedDay &&
        exerciseWeek.find(
          (exerciseDay) => exerciseDay.id === selectedDay?.id
        ) &&
        exerciseWeek
          .find((exerciseDay) => exerciseDay.id === selectedDay?.id)!
          .exercises.map((exercise) => (
            <Fragment key={exercise.name + Math.random() * 1000}>
              <List>
                <ListItem>{exercise.name}</ListItem>
                <ListItem>Sets: {exercise.sets}</ListItem>
                <ListItem>Time between sets: {exercise.timeBetween}</ListItem>
                {exercise.superset ? (
                  <>
                    <ListItem>
                      <div>Superset: {exercise.superset}</div>
                      <Button>Remove Superset</Button>
                    </ListItem>
                  </>
                ) : (
                  <Button>Add Superset</Button>
                )}
              </List>
              <Button>Remove</Button>
            </Fragment>
          ))}
    </Container>
  );
}
