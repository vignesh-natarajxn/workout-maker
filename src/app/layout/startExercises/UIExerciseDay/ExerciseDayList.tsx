import React from "react";
// Models
import { Exercise } from "../../../models/exercise";
// Material UI
import { Button, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
/************************************************************************************************/
interface Props {
  exercise: Exercise;
}

const useStyles: any = makeStyles({
  day: {
    fontSize: 20,
    "&:hover": {
      border: "2px solid #ff8400",
    },
    marginTop: 10,
    marginBottom: 10,
    height: 230,
    width: 170,
  },
  X: {
    marginLeft: "auto",
    // marginRight: 10,
    color: "#000000",
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
});
/************************************************************************************************/
export default function UIExerciseDayList({ exercise }: Props) {
  const classes = useStyles();
  //|||||||||||||||||||||||||||||||||||||||||||
  return (
    <CardContent>
      <Typography align="left" fontSize={18} color="common.white">
        {exercise.name}
      </Typography>
      <div>Sets: {exercise.sets}</div>

      <Typography align="left" fontSize={18} lineHeight={2} color="#b4b4b4">
        {exercise.superset}
      </Typography>
      <Typography fontSize={17} color="common.white" marginLeft={15}>
        Rest Time: {exercise.timeBetween}
      </Typography>
    </CardContent>
  );
}
