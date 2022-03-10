import React from "react";
import { ExerciseDay } from "./models/exerciseDay";
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

const useStyles: any = makeStyles((theme) => ({
  color: {
    backgroundColor: "secondary",
  },
}));

export default function UIExerciseDay({ selectedDay, selectDay }: Props) {
  const [open, setOpen] = React.useState(true);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      {selectedDay && (
        <Grid className={classes.color} container alignItems="center">
          <Grid item xs={4}>
            <Typography variant="h4" margin={3} color="primary">
              {selectedDay.name}
            </Typography>
            {selectedDay.exercises.map((exercise) => (
              <>
                <Typography align="left" variant="h6">
                  {exercise.name}
                </Typography>

                <Typography align="left" variant="h6" color="common.yellow">
                  - {exercise.superset}
                </Typography>
              </>
            ))}
          </Grid>
          <Grid item xs={8}>
            {selectedDay.name}
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
