import React from "react";
// Models
import { ExercisePool } from "../../models/exercisePool";
// Material UI
import {
  Button,
  Collapse,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
/************************************************************************************************/
interface Props {
  EXERCISE_POOL: ExercisePool[];
  handleExcerciseAdd: (name: string) => void;
  forceUpdateHandler: (this: any) => void;
}

const useStyles: any = makeStyles({
  pool: {
    // fontSize: 20,
    "&:hover": {
      border: "2px solid #ff8400",
    },
    marginTop: 5,
    marginBottom: 5,
    height: 50,
  },
  poolbut: {
    border: "2px solid #263141",
    margin: 3,
    borderRadius: 15,
  },
});
/************************************************************************************************/
export default function UIExercisePool({
  EXERCISE_POOL,
  handleExcerciseAdd,
  forceUpdateHandler,
}: Props) {
  const [open, setOpen] = React.useState<{ [id: string]: boolean }>({
    Abs: false,
    Back: false,
    "Biceps and Forearms": false,
    Chest: false,
    Legs: false,
    Other: false,
    Shoulders: false,
    Triceps: false,
  });
  const [prevOpenId, setPrevOpenId] = React.useState<string>("");
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
      <List
        sx={{ width: "100%", bgcolor: "#0d1117" }}
        aria-labelledby="nested-list-subheader"
      >
        {EXERCISE_POOL.map((category) => {
          return (
            <Container key={category.category}>
              <ListItemButton
                className={classes.poolbut}
                onClick={() => handleClick(category.category)}
              >
                <ListItemText
                  primary={
                    <Typography margin={1}>{category.category}</Typography>
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
      </List>
    </Container>
  );
}
