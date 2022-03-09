import React from "react";
import UIExerciseWeek from "./UIExerciseWeek";
import { ExerciseDay } from "./models/exerciseDay";
import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Collapse,
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
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";


interface Props {
  selectedDay: ExerciseDay | undefined;
  selectDay: (id: string) => void;
  cancelSelectDay: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function UIExerciseDay({
  selectedDay,
  selectDay,
  cancelSelectDay,
}: Props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    // <Box>
    //   {selectedDay && (
    //     <Box display="flex" alignItems="center" flexDirection="column">
    //       {/* <ListItem
    //         secondaryAction={
    //           <IconButton edge="end" aria-label="remove">
    //             <CloseIcon onClick={cancelSelectDay} />
    //           </IconButton>
    //         }
    //       > */}
    //         <Card>{selectedDay.name}</Card>
    //         {selectedDay.exercises.map((exercise) => (
    //           <Card>{exercise.name}</Card>
    //         ))}
    //         <CloseIcon onClick={cancelSelectDay} />
    //       {/* </ListItem> */}
    //     </Box>
    //   )}
    // </Box>
    <>
      {selectedDay && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width={500}
          color="primary"
        >
          <CloseIcon onClick={cancelSelectDay} />
          <Item>
            <ListItemText primary={selectedDay.name} />
          </Item>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </Grid>
      )}
    </>
  );
}
