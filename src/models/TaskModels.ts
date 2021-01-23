export interface Task {
  name: string;
  id?: number;
  createdOn?: Date;
  duration: number;
  isPaused: boolean;
  timerId?: NodeJS.Timeout;
}

export type TaskList = Array<Task>;
