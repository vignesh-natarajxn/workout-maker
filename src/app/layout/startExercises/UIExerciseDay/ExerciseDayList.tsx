// Models
import { Exercise } from "../../../models/exercise";

// Material UI
import { List, ListItem, Typography } from "@mui/material";

/************************************************************************************************/

interface Props {
  exercise: Exercise;
}

/************************************************************************************************/

export default function UIExerciseDayList({ exercise }: Props) {
  //|||||||||||||||||||||||||||||||||||||||||||

  return (
    <List>
      <ListItem>
        <Typography align="left" color="common.white">
          {exercise.name}
        </Typography>
        <Typography color="common.white" marginLeft="auto">
          Sets: {exercise.sets}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography align="left" lineHeight={2} color="#b4b4b4">
          {exercise.superset ? "Superset: " + exercise.superset : 'No superset'}
        </Typography>
        <Typography color="common.white" marginLeft="auto">
          Rest Time: {exercise.timeBetween}
        </Typography>
      </ListItem>
    </List>
  );
}
