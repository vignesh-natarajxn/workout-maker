import React, { useState } from "react";

// Components
import UIExerciseDayMain from "./UIExerciseDayMain";
import UIExerciseDayList from "./UIExerciseDayList";

// Models
import { ExerciseDay } from "../models/exerciseDay";
import { Exercise } from "../models/exercise";

// Material UI
import {
  Card,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  selectedDay: ExerciseDay | undefined;
  setSelectedDay: (id: string) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles: any = makeStyles((theme) => ({
  exc: {
    backgroundColor: "#0d1117",
    border: "2px solid #333333",
  },
  selectedExc: {
    backgroundColor: "#191f27",
    border: "2px solid #ff8400",
  },
  card: {
    backgroundColor: "#191f27",
    border: "2px solid #333333",
    marginTop: 20,
    marginBottom: 20,
    maxHeight: 400,
  },
}));

/************************************************************************************************/

export default function UIExerciseDay({ selectedDay, setSelectedDay }: Props) {
  const [open, setOpen] = useState(true);
  const [currentExercise, setCurrentExercise] = useState<Exercise | undefined>(
    undefined
  );
  const currentExerciseHandler = () => {
    if (currentExercise === undefined) {
      setCurrentExercise(selectedDay!.exercises[0]);
    } else {
    }
  };

  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {selectedDay && (
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={4}>
            <Container>
              <Typography variant="h4" margin={3} color="primary">
                {selectedDay.name}
              </Typography>
              {selectedDay.exercises.map((exercise) => (
                <>
                  {exercise === currentExercise ? (
                    <Card className={classes.selectedExc}>
                      <UIExerciseDayList exercise={exercise} />
                    </Card>
                  ) : (
                    <Card className={classes.exc}>
                      <UIExerciseDayList exercise={exercise} />
                    </Card>
                  )}
                </>
              ))}
            </Container>
          </Grid>
          <Grid item xs={8} className={classes.card}>
            <UIExerciseDayMain
              currentExercise={currentExercise}
              setCurrentExercise={currentExerciseHandler}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
