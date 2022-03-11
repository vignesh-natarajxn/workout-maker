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

export default function UIExerciseDay({ selectedDay, selectDay }: Props) {
  const [open, setOpen] = useState(true);
  const [currentExercise, setCurrentExercise] = useState<Exercise | undefined>(
    undefined
  );

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
          <Grid item xs={4}>
            <Container>
              <Typography variant="h4" margin={5} color="primary">
                {selectedDay.name}
              </Typography>
              {selectedDay.exercises.map((exercise) => (
                <>
                  <Typography align="left" variant="h6">
                    {exercise.name}
                  </Typography>
                  <Typography align="left" variant="h6" color="#b4b4b4">
                    - {exercise.superset}
                  </Typography>
                </>
              ))}
            </Container>
          </Grid>

          <UIExercise currentExercise={currentExercise} />
        </Grid>
      )}
    </>
  );
}
