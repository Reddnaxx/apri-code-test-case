export interface ITask {
  id: string;
  title: string;
  text: string;
  completed: boolean;
  children?: ITask[];
}
