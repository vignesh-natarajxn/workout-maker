import { Button, Typography } from "@mui/material";
import { ExerciseDay } from "../../models/exerciseDay";

interface Props {
  selectedDay: ExerciseDay | undefined;
  setCurrentDay: (id: string) => void;
}

export default function MainDefault({ selectedDay, setCurrentDay }: Props) {
  return (
    <>
      <Typography variant="h4" margin={3} color="#ff8400">
        {selectedDay?.name} overview:
      </Typography>
      <Typography variant="h6" margin={2} color="#ffffff">
        Number of exercises: {selectedDay!.exercises.length}
      </Typography>
      <Typography variant="h6" margin={2} color="#ffffff">
        Total working sets:
        {selectedDay!.exercises.reduce(
          (total, exercise) => (total = total + exercise.sets),
          0
        )}
      </Typography>
      <Typography variant="h6" margin={2} color="#ffffff">
        Time Estimation:{" "}
        {(
          (selectedDay!.exercises.length *
            selectedDay!.exercises[0].sets *
            (selectedDay!.exercises[0].timeBetween + 50)) /
          60
        ).toFixed(0)}{" "}
        minutes
      </Typography>
      <Button
        variant="contained"
        onClick={() => setCurrentDay(selectedDay!.id)}
      >
        <Typography variant="h5" margin={2} color="#000000">
          Begin Workout
        </Typography>
      </Button>
    </>
  );
}
