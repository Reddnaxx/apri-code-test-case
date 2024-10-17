import { Input, useModalContext } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { FormEvent } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';

type EditTaskModalProps = {
  taskId: string;
};

export const EditTaskModal = observer(({ taskId }: EditTaskModalProps) => {
  const { updateTask, findTaskById } = useTaskStore();
  const { closeModal } = useModalContext();
  const task = findTaskById(taskId);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;
    updateTask(taskId, { title, text });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Редактирование задачи</h2>
      <Input
        name="title"
        placeholder="Название"
        defaultValue={task?.title ?? ''}
        required
      />
      <Input
        name="text"
        placeholder="Текст"
        defaultValue={task?.text ?? ''}
        required
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary/90 active:bg-primary/80 rounded-md px-4 py-2 text-white"
      >
        Сохранить
      </button>
    </form>
  );
});

EditTaskModal.displayName = 'EditTaskModal';

export default EditTaskModal;
