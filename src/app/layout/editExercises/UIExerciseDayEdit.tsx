import { useState } from "react";
import { TransitionGroup } from "react-transition-group";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import {
  Button,
  Collapse,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import UIExerciseDayEditExercise from "./UIExerciseDayEditExercise";

/************************************************************************************************/

interface Props {
  exerciseWeek: ExerciseDay[];
  selectedDay: ExerciseDay;
  handleExcerciseEdit: (opr: string, id: string) => void;
  storeData: () => void;
}

//|||||||||||||||||||||||||||||||||||||||||||

const useStyles: any = makeStyles({
  form: {
    marginTop: 10,
    marginBottom: 5,

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
    <List>
      <ListItem>
        {formEdit ? (
          <TextField
            onChange={(e) => {
              handleExcerciseEdit("edit day name", e.target.value);
            }}
            defaultValue={selectedDay.name}
            size="small"
            className={classes.form}
            sx={{
              input: { color: "white !important" },
            }}
          ></TextField>
        ) : (
          <Typography fontSize={25} color="white">
            {selectedDay.name}
            <Button
              onClick={() => {
                setFormEdit(true);
              }}
            >
              <EditIcon />
            </Button>
          </Typography>
        )}
        <Typography marginLeft="auto">
          <Button onClick={storeData} variant="contained">
            <Typography margin={1}>Save</Typography>
          </Button>
        </Typography>
      </ListItem>
      <Button onClick={() => handleExcerciseEdit("add", "noelements")}>
        <AddCircleIcon />
      </Button>

      <TransitionGroup>
        {exerciseWeek
          .find((exerciseDay) => exerciseDay.id === selectedDay.id)
          ?.exercises.map((exercise) => (
            <Collapse key={exercise.id}>
              <UIExerciseDayEditExercise
                exercise={exercise}
                handleExcerciseEdit={handleExcerciseEdit}
              />
            </Collapse>
          ))}
      </TransitionGroup>
    </List>
  );
}
