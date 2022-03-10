import React, { useEffect, useState } from "react";
import { ExerciseDay } from "./models/exerciseDay";
import UIExerciseDay from "./UIExerciseDay";
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
import "./Styles.css";

interface Props {
  exerciseWeek: ExerciseDay[];
  selectedDay: ExerciseDay | undefined;
  selectDay: (id: string) => void;
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
                <h3>
                  {i === 1
                    ? "Mon"
                    : i === 2
                    ? "Tue"
                    : i === 3
                    ? "Wed"
                    : i === 4
                    ? "Thu"
                    : i === 5
                    ? "Fri"
                    : i === 6
                    ? "Sat"
                    : "Sun"}
                </h3>
                {selectedDay === exerciseDay ? (
                  <Typography color="primary">{exerciseDay.name}</Typography>
                ) : (
                  <Typography>{exerciseDay.name}</Typography>
                )}
              </List>
            )}
          </Button>
        );
      })}
      <UIExerciseDay selectedDay={selectedDay} selectDay={selectDay} />
    </Box>
  );
}
