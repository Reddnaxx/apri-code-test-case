import { Input, useModalContext } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { FormEvent } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';

type NewTaskModalProps = {
  taskId: string;
};

export const NewTaskModal = observer(({ taskId }: NewTaskModalProps) => {
  const { addTask } = useTaskStore();
  const { closeModal } = useModalContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;
    addTask({ title, text, completed: false }, taskId);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Создание подзадачи</h2>
      <Input name="title" placeholder="Название" required />
      <Input name="text" placeholder="Текст" required />
      <button
        type="submit"
        className="bg-primary hover:bg-primary/90 active:bg-primary/80 rounded-md px-4 py-2 text-white"
      >
        Создать
      </button>
    </form>
  );
});

NewTaskModal.displayName = 'NewTaskModal';

export default NewTaskModal;
