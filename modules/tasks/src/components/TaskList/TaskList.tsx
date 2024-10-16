import { observer } from 'mobx-react-lite';
import type { ITask } from '../../interfaces/task.interface';
import TaskItem from '../TaskItem/TaskItem';

type TaskListProps = {
  tasks: ITask[];
};

export const TaskList = observer(({ tasks }: TaskListProps) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
