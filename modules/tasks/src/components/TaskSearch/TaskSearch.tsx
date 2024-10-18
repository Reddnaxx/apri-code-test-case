import { Input, SearchSvg } from '@app/ui';
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
    <div className={cn('flex relative', className)}>
      <Input
        icon={<SearchSvg width={24} height={24} className="stroke-gray-300" />}
        placeholder="Поиск"
        className="pr-[calc(24px + 1rem)] w-full"
        onChange={handleChange}
      />
    </div>
  );
}

export default TaskSearch;
