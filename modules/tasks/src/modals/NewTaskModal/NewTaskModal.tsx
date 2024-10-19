import { Button, Input, Textarea, useModalContext } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { FormEvent, useRef, useState } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';

type NewTaskModalProps = {
  parentId?: string;
};

export const NewTaskModal = observer(({ parentId }: NewTaskModalProps) => {
  const { addTask } = useTaskStore();
  const { closeModal } = useModalContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;
    addTask({ title, text }, parentId);
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
      className="flex flex-col gap-5"
    >
      <h2 className="text-2xl font-medium">
        {parentId ? 'Создание подзадачи' : 'Создание задачи'}
      </h2>
      <fieldset className="flex flex-col gap-4">
        <Input
          name="title"
          placeholder="Название"
          className="w-full"
          autoFocus
          required
        />
        <Textarea
          name="text"
          placeholder="Текст"
          className="w-full"
          rows={2}
          required
        />
      </fieldset>
      <Button type="submit" disabled={!isFormValid}>
        Создать
      </Button>
    </form>
  );
});

NewTaskModal.displayName = 'NewTaskModal';

export default NewTaskModal;
