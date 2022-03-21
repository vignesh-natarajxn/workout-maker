import React, { Fragment, useState } from "react";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import {
  Button,
  Container,
  inputLabelClasses,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
  selectedDay: ExerciseDay | undefined;
  handleExcerciseEdit: (opr: string, id: string) => void;
  storeData: () => void;
}

//|||||||||||||||||||||||||||||||||||||||||||

const useStyles: any = makeStyles({
  day: {
    fontSize: 20,
    "&:hover": {
      border: "2px solid #e84855",
    },
    marginTop: 10,
    marginBottom: 10,
    height: 230,
    width: 170,
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
  form: {
    marginTop: 10,
    marginBottom: 5,
    color: "white !important",
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "white !important",
    },
    "&.focused": {
      color: "white !important",
    },
    "& label.Mui-focused": {
      color: "white !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white ",
      },
      "&:hover fieldset": {
        borderColor: "#e84855",
      },
    },
  },
});

/************************************************************************************************/

export default function UIExerciseDayEdit({
  exerciseWeek,
  selectedDay,
  handleExcerciseEdit,
  storeData,
}: Props) {
  const classes = useStyles();
  const [formEdit, setFormEdit] = useState<boolean>(false);
  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <Container>
      <List>
        <ListItem>
          {formEdit ? (
            <form>
              <TextField
                onChange={(e) => {
                  handleExcerciseEdit("edit day name", e.target.value);
                }}
                defaultValue={selectedDay!.name}
                size="small"
                className={classes.form}
                sx={{
                  input: { color: "white !important" },
                }}
              ></TextField>
            </form>
          ) : (
            <Typography margin={2} fontSize={25} color="white">
              {selectedDay!.name}
              <Button
                onClick={() => {
                  setFormEdit(true);
                }}
              >
                <EditIcon />
              </Button>
            </Typography>
          )}
          <Typography marginLeft='auto'><Button onClick={storeData} variant="contained">
            <Typography margin={1}>Save</Typography>
          </Button></Typography>
          
        </ListItem>
        <Button onClick={() => handleExcerciseEdit("add", "noelements")}>
          <AddCircleIcon />
        </Button>
        {selectedDay &&
          exerciseWeek.find(
            (exerciseDay) => exerciseDay.id === selectedDay?.id
          ) &&
          exerciseWeek
            .find((exerciseDay) => exerciseDay.id === selectedDay?.id)!
            .exercises.map((exercise) => (
              <Fragment key={exercise.name + Math.random() * 1000}>
                <ListItem>
                  <Typography fontSize={19} color="primary">
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
              </Fragment>
            ))}
      </List>
    </Container>
  );
}
