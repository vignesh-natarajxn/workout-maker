import { CardContent, Typography } from "@mui/material";
import { Exercise } from "../models/exercise";

interface Props {
  exercise: Exercise;
}

export default function UIExerciseDayList({ exercise }: Props) {
  return (
    <CardContent>
      <Typography align="left" variant="h6" color="common.white">
        {exercise.name}
      </Typography>
      <Typography align="left" variant="h6" color="#b4b4b4" lineHeight={2}>
        -- {exercise.superset}
      </Typography>
      <Typography
        fontSize={17}
        lineHeight={3}
        color="#b4b4b4"
        fontStyle="italic"
      >
        Sets: {exercise.sets} | Rest Time: {exercise.timeBetween}
      </Typography>
    </CardContent>
  );
}
