export interface ExerciseDay {
  id: string;
  name: string;
  exercises: {
    name: string;
    timeBetween: number;
    sets: number;
    superset: string;
  }[];
}
