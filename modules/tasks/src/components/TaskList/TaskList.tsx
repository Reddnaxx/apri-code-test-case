import type { ITask } from '../../interfaces/task.interface';
import TaskItem from '../TaskItem/TaskItem';

type TaskListProps = {
  tasks: ITask[];
};

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
