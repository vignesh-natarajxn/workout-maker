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
  handleExcerciseEdit: (opr: string) => void;
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
  handleExcerciseEdit,
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
                <ListItem>
                  <Typography>{exercise.name}</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Sets: {exercise.sets}</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Time between sets: {exercise.timeBetween}
                  </Typography>
                </ListItem>
                {exercise.superset ? (
                  <>
                    <ListItem>
                      <Typography>
                        Superset: {exercise.superset}
                        <Button>Remove Superset</Button>
                      </Typography>
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
