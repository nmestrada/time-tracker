export interface Task {
  name: string;
  id?: number;
  createdOn?: Date;
  duration: number;
}

export type TaskList = Array<Task>;
