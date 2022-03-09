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
} from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  exerciseWeek: ExerciseDay[];
}

const useStyles: any = makeStyles({
  day: {
    fontSize: 20,
    "&:hover": {
      border: "2px solid #ff8400",
    },
    marginTop: 30,
    height: 200,
    width: 170,
  },
});

export default function UIExerciseWeek({ exerciseWeek }: Props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const daySelect = () => {
    console.log("yolo");
  };

  return (
    <Box textAlign="center">
      {exerciseWeek.map((exerciseDay) => (
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          key={exerciseDay.id}
          onClick={daySelect}
          className={classes.day}
          variant="contained"
          color="secondary"
        >
          {hover ? (
            <List>
              {exerciseDay.exercises.map((exercise) => (
                <ListItemText primary={exercise.name} />
              ))}
            </List>
          ) : (
            exerciseDay.name
          )}
        </Button>
      ))}
    </Box>
  );
}
