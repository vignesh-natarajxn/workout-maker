import React, { Fragment } from "react";

// Components
import UIExerciseWeek from "../startExercises/UIExerciseWeek";

// Models
import { ExerciseDay } from "../../models/exerciseDay";

// Material UI
import {
  Button,
  Collapse,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { ExercisePool } from "../../models/exercisePool";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

/************************************************************************************************/

interface Props {
  EXERCISE_POOL: ExercisePool[];
}

/************************************************************************************************/

export default function UIExercisePool({ EXERCISE_POOL }: Props) {
  const [open, setOpen] = React.useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (i: number) => {
    setOpen((prev) => {
      prev[i] = !prev[i];
      return prev;
    });
  };
  return (
    <>
      <List
        sx={{ width: "100%", bgcolor: "#0d1117" }}
        aria-labelledby="nested-list-subheader"
      >
        {EXERCISE_POOL.map((category, i) => {
          i += 1;
          console.log(i-1);
          console.log(open[i-1]);
          return (
            <Container key={category.category}>
              <ListItemButton onClick={() => handleClick(i-1)}>
                <ListItemText primary={category.category} />
                {open[i-1] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open![i-1]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    {category.exercises.map((exercise) => (
                      <Fragment key={Math.random()}>
                        <Button variant="contained" color="secondary" fullWidth>
                          {exercise}
                        </Button>
                      </Fragment>
                    ))}
                  </ListItemButton>
                </List>
              </Collapse>
            </Container>
          );
        })}
      </List>
    </>
  );
}
