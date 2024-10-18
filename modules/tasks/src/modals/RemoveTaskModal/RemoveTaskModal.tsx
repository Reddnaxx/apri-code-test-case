import { Button, useModalContext } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { useTaskStore } from '../../contexts/taskStoreContext';

type RemoveTaskModalProps = {
  taskId: string;
};

export const RemoveTaskModal = observer(({ taskId }: RemoveTaskModalProps) => {
  const { removeTask } = useTaskStore();
  const { closeModal } = useModalContext();

  const handleRemove = () => {
    removeTask(taskId);
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-2xl font-normal">Удалить задачу?</h2>
      <div className="flex gap-4">
        <Button
          autoFocus
          className="bg-warn hover:bg-warn/90 active:bg-warn/80"
          onClick={handleRemove}
        >
          Удалить
        </Button>
        <Button onClick={handleCancel}>Отменить</Button>
      </div>
    </div>
  );
});

RemoveTaskModal.displayName = 'RemoveTaskModal';

export default RemoveTaskModal;
