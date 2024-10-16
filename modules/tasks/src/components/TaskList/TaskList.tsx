import { observer } from 'mobx-react-lite';
import type { ITask } from '../../interfaces/task.interface';
import TaskItem from '../TaskItem/TaskItem';

type TaskListProps = {
  tasks: ITask[];
  className?: string;
};

export const TaskList = observer(({ tasks, className }: TaskListProps) => {
  return (
    <ul className={className}>
      {tasks.length > 0 ? (
        tasks.map(task => <TaskItem key={task.id} {...task} />)
      ) : (
        <div className="text-center text-xl">Задачи не найдены</div>
      )}
    </ul>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
