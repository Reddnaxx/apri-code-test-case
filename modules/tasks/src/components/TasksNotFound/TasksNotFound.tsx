import { Button, useModalContext } from '@app/ui';
import { cn } from '@app/utils';
import NewTaskModal from '../../modals/NewTaskModal/NewTaskModal';

type TasksNotFoundProps = {
  className?: string;
};

export function TasksNotFound({ className }: TasksNotFoundProps) {
  const { openModal } = useModalContext();

  const handleAddTask = () => {
    openModal(<NewTaskModal />);
  };

  return (
    <div className={cn('flex flex-col w-fit mx-auto gap-4', className)}>
      <p className="text-center text-xl">Задачи не найдены</p>
      <Button onClick={handleAddTask}>Добавить задачу</Button>
    </div>
  );
}

export default TasksNotFound;
