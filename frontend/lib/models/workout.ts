import { ReactElement } from "react";

export interface Workout {
  name: string;
  icon: ReactElement;
  duration?: number;
  reps?: number;
}
