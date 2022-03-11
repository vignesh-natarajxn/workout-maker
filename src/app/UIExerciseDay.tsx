import React, { useState } from "react";
import { ExerciseDay } from "./models/exerciseDay";
import UIExercise from "./UIExercise";
import { Exercise } from "./models/exercise";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

interface Props {
  selectedDay: ExerciseDay | undefined;
  selectDay: (id: string) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles: any = makeStyles((theme) => ({
  card: {
    backgroundColor: "#0d1117",
    border: "2px solid #333333",
  },
  selectedCard: {
    backgroundColor: "#191f27",
    border: "2px solid #ff8400",
  }
}));

export default function UIExerciseDay({ selectedDay, selectDay }: Props) {
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
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Container>
              <Typography variant="h4" margin={3} color="primary">
                {selectedDay.name}
              </Typography>
              {selectedDay.exercises.map((exercise) => (
                <>
                  {exercise === currentExercise ? (
                    <Card className={classes.selectedCard}>
                      <CardContent>
                        <Typography
                          align="left"
                          variant="h6"
                          color="common.white"
                        >
                          {exercise.name}
                        </Typography>
                        <Typography align="left" variant="h6" color="#b4b4b4">
                          sub: {exercise.superset}
                        </Typography>
                        <Typography
                          fontSize={17}
                          lineHeight={3}
                          color="#b4b4b4"
                          fontStyle="italic"
                        >
                          Sets: {exercise.sets} | Rest Time:{" "}
                          {exercise.timeBetween}
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography
                          align="left"
                          variant="h6"
                          color="common.white"
                        >
                          {exercise.name}
                        </Typography>
                        <Typography align="left" variant="h6" color="#b4b4b4">
                          sub: {exercise.superset}
                        </Typography>
                        <Typography
                          fontSize={17}
                          lineHeight={3}
                          color="#b4b4b4"
                          fontStyle="italic"
                        >
                          Sets: {exercise.sets} | Rest Time:{" "}
                          {exercise.timeBetween}
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
                </>
              ))}
            </Container>
          </Grid>

          <UIExercise
            currentExercise={currentExercise}
            setCurrentExercise={currentExerciseHandler}
          />
        </Grid>
      )}
    </>
  );
}
