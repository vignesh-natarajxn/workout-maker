import React, { useState } from "react";
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
    fontSize: 10,
    "&:hover": {
      border: "2px solid #ff8400",
    },
    marginTop: 30,
    height: 300,
    width: 170,
  },
});

interface IHover {
  [name: string]: boolean
}

let hoverInitial: IHover = {};

export default function UIExerciseWeek({ exerciseWeek }: Props) {
  exerciseWeek.map((exerciseDay) => {
    hoverInitial[exerciseDay.id]= false;
  });
  
  const classes = useStyles();
  const [hover, setHover] = useState(hoverInitial);
  
  const hoverHandler = (value: boolean, exname: string) => {
    setHover((data)=> {
    data[exname]=value
    return data})
    setHover((data)=> data)
    console.log(hover)
  };

  const daySelect = () => {
    console.log("yolo");
  };

  return (
    <Box textAlign="center">
      {exerciseWeek.map((exerciseDay) => {
        return (
          <Button
            onMouseEnter={() => hoverHandler(true, exerciseDay.id)}
            onMouseLeave={() => hoverHandler(false, exerciseDay.id)}
            key={exerciseDay.id}
            onClick={daySelect}
            className={classes.day}
            variant="contained"
            color="secondary"
          >
            {(hover[exerciseDay.id]===true)? (
              <List>
                {exerciseDay.exercises.map((exercise) => (
                  <ListItemText primary={exercise.name} />
                ))}
              </List>
            ) : (
              <h1>{exerciseDay.name}</h1>
            )}
          </Button>
        );
      })}
      {<Box></Box>}
    </Box>
  );
}
