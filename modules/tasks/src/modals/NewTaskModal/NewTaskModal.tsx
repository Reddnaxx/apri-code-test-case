import { Button, Input, useModalContext } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { FormEvent, useRef, useState } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';

type NewTaskModalProps = {
  taskId?: string;
};

export const NewTaskModal = observer(({ taskId }: NewTaskModalProps) => {
  const { addTask } = useTaskStore();
  const { closeModal } = useModalContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;
    addTask({ title, text, completed: false }, taskId);
    closeModal();
  };

  const handleChange = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="flex flex-col gap-4"
    >
      <h2 className="text-2xl font-medium">Создание подзадачи</h2>
      <Input
        name="title"
        placeholder="Название"
        className="w-full"
        autoFocus
        required
      />
      <Input name="text" placeholder="Текст" className="w-full" required />
      <Button type="submit" disabled={!isFormValid}>
        Создать
      </Button>
    </form>
  );
});

NewTaskModal.displayName = 'NewTaskModal';

export default NewTaskModal;
