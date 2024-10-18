import { Input } from '@app/ui';
import { cn } from '@app/utils';
import { ChangeEvent } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';
import { ITask } from '../../interfaces/task.interface';

type TaskSearchProps = {
  className?: string;
  onChange: (tasks: ITask[]) => void;
  onStartSearch: () => void;
  onEndSearch: () => void;
};

export function TaskSearch({
  className,
  onChange,
  onStartSearch,
  onEndSearch,
}: TaskSearchProps) {
  const { searchTasksByContent: searchTasksByTitle } = useTaskStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const tasks = searchTasksByTitle(value);
    onChange(tasks);

    if (value) {
      onStartSearch();
    } else {
      onEndSearch();
    }
  };

  return (
    <div className={cn('flex', className)}>
      <Input placeholder="Поиск" className="w-full" onChange={handleChange} />
    </div>
  );
}

export default TaskSearch;
