import React, { useEffect, useState } from "react";
import { ExerciseDay } from "./models/exerciseDay";
import "./Styles.css";
import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import UIExerciseDay from "./UIExerciseDay";

interface Props {
  exerciseWeek: ExerciseDay[];
  selectedDay: ExerciseDay | undefined;
  selectDay: (id: string) => void;
  cancelSelectDay: () => void;
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

export default function UIExerciseWeek({
  exerciseWeek,
  selectedDay,
  selectDay,
  cancelSelectDay,
}: Props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <Box textAlign="center">
      {exerciseWeek.map((exerciseDay, i) => {
        i += 1;
        return (
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={exerciseDay.id}
            onClick={() => selectDay(exerciseDay.id)}
            className={classes.day}
            variant="contained"
            color="secondary"
          >
            {hover ? (
              <List>
                {/* <Typography>{i}</Typography> */}
                {exerciseDay.exercises.map((exercise) => (
                  <ListItemText key={exercise.name} primary={exercise.name} />
                ))}
              </List>
            ) : (
              <List>
                <h3>{i}</h3>
                <ListItemText primary={exerciseDay.name} />
              </List>
            )}
          </Button>
        );
      })}
      <UIExerciseDay
        selectedDay={selectedDay}
        selectDay={selectDay}
        cancelSelectDay={cancelSelectDay}
      />
    </Box>
  );
}
