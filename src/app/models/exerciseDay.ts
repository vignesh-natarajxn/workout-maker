export interface ExerciseDay {
  id: string;
  name: string;
  exercises: {
    id: string;
    name: string;
    timeBetween: number;
    sets: number;
    superset: string;
  }[];
}
