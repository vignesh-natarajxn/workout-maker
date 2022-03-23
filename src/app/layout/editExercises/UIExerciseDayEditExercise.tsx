// Models
import { Exercise } from "../../models/exercise";

// Material UI
import { Button, Card, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";

/************************************************************************************************/

interface Props {
  exercise: Exercise;
  handleExcerciseEdit: (opr: string, id: string) => void;
}

//|||||||||||||||||||||||||||||||||||||||||||

const useStyles: any = makeStyles({
  cardd: {
    backgroundColor: "#393E41",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  X: {
    marginLeft: "auto",
    color: "#e84855",
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

export default function UIExerciseDayEditExercise({
  exercise,
  handleExcerciseEdit,
}: Props) {
  const classes = useStyles();
  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <>
      <Card className={classes.cardd}>
        <ListItem>
          <Typography fontSize={20} color="primary">
            {exercise.name}
          </Typography>
          <Button
            className={classes.X}
            onClick={() => handleExcerciseEdit("remove", exercise.id)}
          >
            <CloseIcon />
          </Button>
        </ListItem>
        <ListItem>
          <Typography color="#ffffff">Sets: {exercise.sets}</Typography>
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
          <Typography color="#ffffff">
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
              <Typography color="#ffffff">
                Superset: {exercise.superset}
              </Typography>
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
              onClick={() => handleExcerciseEdit("add superset", exercise.id)}
            >
              Add Superset
            </Button>
          </ListItem>
        )}
      </Card>
      <Button onClick={() => handleExcerciseEdit("add", exercise.id)}>
        <AddCircleIcon />
      </Button>
    </>
  );
}
