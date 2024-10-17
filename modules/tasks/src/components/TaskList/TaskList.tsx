import { observer } from 'mobx-react-lite';
import { useTaskStore } from '../../contexts/taskStoreContext';
import TaskItem from '../TaskItem/TaskItem';

type TaskListProps = {
  className?: string;
};

export const TaskList = observer(({ className }: TaskListProps) => {
  const store = useTaskStore();
  const tasks = store.parentTasks;

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
