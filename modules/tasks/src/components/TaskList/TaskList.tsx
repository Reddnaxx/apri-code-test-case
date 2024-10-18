import { Button, useModalContext } from '@app/ui';
import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';
import { ITask } from '../../interfaces/task.interface';
import NewTaskModal from '../../modals/NewTaskModal/NewTaskModal';
import TaskItem from '../TaskItem/TaskItem';
import { TaskSearch } from '../TaskSearch/TaskSearch';
import TasksNotFound from '../TasksNotFound/TasksNotFound';

type TaskListProps = {
  className?: string;
};

export const TaskList = observer(({ className }: TaskListProps) => {
  const store = useTaskStore();
  const [tasks, setTasks] = useState<ITask[]>(store.parentTasks);
  const [isSearch, setIsSearch] = useState(false);
  const { openModal } = useModalContext();

  useEffect(() => {
    if (isSearch) return;
    setTasks(store.parentTasks);
  }, [isSearch, store.parentTasks]);

  const handleSearch = (tasks: ITask[]) => {
    setTasks(tasks);
  };

  const handleAddTask = () => {
    openModal(<NewTaskModal />);
  };

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="flex gap-2">
        <TaskSearch
          className="flex-1"
          onChange={handleSearch}
          onStartSearch={() => setIsSearch(true)}
          onEndSearch={() => setIsSearch(false)}
        />
        <Button onClick={handleAddTask}>+</Button>
      </div>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id} {...task} />
          ))}
        </ul>
      ) : (
        <TasksNotFound className="text-center" />
      )}
    </div>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
