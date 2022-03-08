import React from "react";
import { ExerciseDay } from "./models/exerciseDay";
import "./Styles.css";
import { Box, Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  exerciseWeek: ExerciseDay[];
}

const useStyles: any = makeStyles({
  day: {
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#ff8400",  
    },
    marginTop: 30,
  },
});

export default function UIExerciseWeek({ exerciseWeek }: Props) {
  const classes = useStyles();

  const daySelect = () => {
    console.log("yolo");
  };

  return (
    <Box textAlign='center'>
      <ButtonGroup>
        {exerciseWeek.map((exerciseDay) => (
          <Button
            key={exerciseDay.id}
            onClick={daySelect}
            className={classes.day}
            variant="contained"
            color="secondary"
          >
            <h1>{exerciseDay.name}</h1>
          </Button>
        ))}
      </ButtonGroup>
      {<Box>

      </Box>}
    </Box>
  );
}
