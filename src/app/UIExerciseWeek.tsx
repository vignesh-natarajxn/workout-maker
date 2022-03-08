import React from "react";
import { ExerciseDay } from "./models/exerciseDay";
import "./Styles.css";
import Button from '@mui/material/Button';

interface Props {
  exerciseWeek: ExerciseDay[];
}

export default function UIExerciseWeek({ exerciseWeek }: Props) {

  const daySelect = () => {
    console.log("yolo")
  }

  return (
    <div className="Exercise-week">
      {exerciseWeek.map((exerciseDay) => (
        <Button variant="contained" onClick={daySelect} color="primary">
          <h1 className="Exercise-day-content">{exerciseDay.name}</h1>
        </Button>
      ))}
    </div>
  );
}
