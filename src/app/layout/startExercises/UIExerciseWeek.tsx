import React, { useState } from "react";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import { Button, List, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
  selectedDay: ExerciseDay | undefined;
  setSelectedDay: (id: string) => void;
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

export default function UIExerciseWeek({
  exerciseWeek,
  selectedDay,
  setSelectedDay,
}: Props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <>
      {exerciseWeek.map((exerciseDay, i) => {
        i += 1;
        return (
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={exerciseDay.id}
            onClick={() => setSelectedDay(exerciseDay.id)}
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
    </>
  );
}
