import React, { useState } from "react";

// Models
import { ExercisePool } from "../../models/exercisePool";

// Material UI
import {
  Button,
  Collapse,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

/************************************************************************************************/

interface Props {
  EXERCISE_POOL: ExercisePool[];
  handleExcerciseAdd: (name: string) => void;
  setExercisePool: (id1: string[]) => void;
}

const useStyles: any = makeStyles({
  pool: {
    margin: 2,
    height: 50,
  },
  poolbut: {
    "&:hover": {
      background: "#e84855",
    },
    background: "#393E41",
    border: "2px solid #1C1D21",
    margin: 3,
    borderRadius: 5,
  },
  poolbutOpen: {
    "&:hover": {
      background: "#e84855",
    },
    background: "#e84855",
    border: "2px solid #1C1D21",
    margin: 3,
    borderRadius: 5,
  },
  form: {
    marginTop: 2,
    marginBottom: 2,
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

export default function UIExercisePool({
  EXERCISE_POOL,
  handleExcerciseAdd,
  setExercisePool,
}: Props) {
  const [open, setOpen] = useState<{ [id: string]: boolean }>({
    Abs: false,
    Back: false,
    "Biceps and Forearms": false,
    Chest: false,
    Legs: false,
    Other: false,
    Shoulders: false,
    Triceps: false,
  });
  const [prevOpenId, setPrevOpenId] = useState<string>("");
  const [customExc, setCustomExc] = useState<string>("");
  const classes = useStyles();

  //|||||||||||||||||||||||||||||||||||||||||||

  const handleClick = (id: string) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
      [prevOpenId]: false,
    }));
    if (prevOpenId !== id) setPrevOpenId(id);
    else setPrevOpenId("");
  };

  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <Container>
      <List sx={{ width: "100%" }} aria-labelledby="nested-list-subheader">
        {EXERCISE_POOL.map((category) => {
          return (
            <Container key={category.category}>
              <ListItemButton
                className={
                  open[category.category]
                    ? classes.poolbutOpen
                    : classes.poolbut
                }
                onClick={() => handleClick(category.category)}
              >
                <ListItemText
                  primary={
                    <Typography color="#ffffff" margin={1}>
                      {category.category}
                    </Typography>
                  }
                />
                {open[category.category] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open[category.category]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton>
                    <div
                      key={Math.random()}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      {category.exercises.map((exercise) => (
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.pool}
                          fullWidth
                          key={exercise.name + Math.random() * 1000}
                          onClick={() => handleExcerciseAdd(exercise.name)}
                        >
                          {exercise.name}
                        </Button>
                      ))}
                    </div>
                  </ListItemButton>
                </List>
              </Collapse>
            </Container>
          );
        })}
        <Typography margin={2} />
        <ListItem>
          <Typography color="white" marginTop={0} marginRight={1}>
            Custom Exercise:{" "}
          </Typography>
          <TextField
            onChange={(e) => setCustomExc(e.target.value)}
            size="small"
            className={classes.form}
            sx={{
              input: { color: "white !important" },
            }}
            fullWidth
          />
          <Button onClick={() => handleExcerciseAdd(customExc)}>Done</Button>
          {/* <Typography marginLeft="auto">
          </Typography> */}
        </ListItem>
        <Typography margin={3} />
        <Button variant="contained" onClick={() => setExercisePool(["", ""])}>
          Cancel
        </Button>
      </List>
    </Container>
  );
}
