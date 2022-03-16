import React, { Fragment, useState } from "react";
// Models
import { ExerciseDay } from "../../models/exerciseDay";
// Material UI
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
/************************************************************************************************/
interface Props {
  exerciseWeek: ExerciseDay[];
  selectedDay: ExerciseDay | undefined;
  handleExcerciseEdit: (opr: string, id: string) => void;
}
//|||||||||||||||||||||||||||||||||||||||||||
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
  X: {
    marginLeft: "auto",
    // marginRight: 10,
    color: "#000000",
    width: 20,
  },
  ss: {
    marginLeft: "auto",
    color: "#bbbbbb",
  },
  add: {
    marginLeft: 0,
    color: "#bbbbbb",
  },
});
/************************************************************************************************/
export default function UIExerciseDayEdit({
  exerciseWeek,
  selectedDay,
  handleExcerciseEdit,
}: Props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  //|||||||||||||||||||||||||||||||||||||||||||
  return (
    <Container>
      {selectedDay &&
        exerciseWeek.find(
          (exerciseDay) => exerciseDay.id === selectedDay?.id
        ) &&
        exerciseWeek
          .find((exerciseDay) => exerciseDay.id === selectedDay?.id)!
          .exercises.map((exercise) => (
            <Fragment key={exercise.name + Math.random() * 1000}>
              <List>
                <ListItem>
                  <Typography color="primary">{exercise.name} </Typography>
                  <Button
                    className={classes.X}
                    variant="contained"
                    onClick={() => handleExcerciseEdit("remove", exercise.id)}
                  >
                    <CloseIcon />
                  </Button>
                </ListItem>
                <ListItem>
                  <Typography>Sets: {exercise.sets}</Typography>
                  <Button
                    className={classes.ss}
                    onClick={() => handleExcerciseEdit("set-", exercise.id)}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button
                    className={classes.add}
                    onClick={() => handleExcerciseEdit("set+", exercise.id)}
                  >
                    <AddIcon />
                  </Button>
                </ListItem>
                <ListItem>
                  <Typography>
                    Time between sets: {exercise.timeBetween} s
                  </Typography>
                  <Button
                    className={classes.ss}
                    onClick={() => handleExcerciseEdit("time-", exercise.id)}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button
                    className={classes.add}
                    onClick={() => handleExcerciseEdit("time+", exercise.id)}
                  >
                    <AddIcon />
                  </Button>
                </ListItem>
                {exercise.superset ? (
                  <>
                    <ListItem>
                      <Typography>Superset: {exercise.superset}</Typography>
                      <Button
                        className={classes.ss}
                        onClick={() =>
                          handleExcerciseEdit("remove superset", exercise.id)
                        }
                      >
                        <CloseIcon />
                      </Button>
                    </ListItem>
                  </>
                ) : (
                  <ListItem>
                    <Button
                      className={classes.ss}
                      onClick={() =>
                        handleExcerciseEdit("add superset", exercise.id)
                      }
                    >
                      Add Superset
                    </Button>
                  </ListItem>
                )}
                <Button onClick={() => handleExcerciseEdit("add", exercise.id)}>
                  <AddCircleIcon />
                </Button>
              </List>
            </Fragment>
          ))}
    </Container>
  );
}
