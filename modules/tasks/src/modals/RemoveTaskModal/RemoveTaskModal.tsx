import { useModalContext } from '@app/ui';
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
        <button
          className="bg-warn hover:bg-warn/90 active:bg-warn/80 rounded-md px-4 py-2 text-white"
          onClick={handleRemove}
        >
          Удалить
        </button>
        <button
          className="bg-primary hover:bg-primary/90 active:bg-primary/80 rounded-md px-4 py-2 text-white"
          onClick={handleCancel}
        >
          Отменить
        </button>
      </div>
    </div>
  );
});

RemoveTaskModal.displayName = 'RemoveTaskModal';

export default RemoveTaskModal;
