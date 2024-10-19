import { Button, Input, Textarea, useModalContext } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { FormEvent, useRef, useState } from 'react';
import { useTaskStore } from '../../contexts/taskStoreContext';

type EditTaskModalProps = {
  taskId: string;
};

export const EditTaskModal = observer(({ taskId }: EditTaskModalProps) => {
  const { updateTask, findTaskById } = useTaskStore();
  const { closeModal } = useModalContext();

  const [isFormValid, setIsFormValid] = useState(false);

  const task = findTaskById(taskId);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;
    updateTask(taskId, { title, text });
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
      <h2 className="text-2xl font-medium">Редактирование задачи</h2>
      <fieldset className="flex flex-col gap-4">
        <Input
          name="title"
          placeholder="Название"
          defaultValue={task?.title ?? ''}
          className="w-full"
          autoFocus
          required
        />
        <Textarea
          name="text"
          placeholder="Текст"
          defaultValue={task?.text ?? ''}
          className="w-full"
          rows={2}
          required
        />
      </fieldset>
      <fieldset className="flex gap-2">
        <Button type="submit" className="flex-1" disabled={!isFormValid}>
          Сохранить
        </Button>
        <Button
          type="reset"
          className="bg-warn hover:bg-warn/80 active:bg-warn/70 flex-1"
        >
          Сбросить
        </Button>
      </fieldset>
    </form>
  );
});

EditTaskModal.displayName = 'EditTaskModal';

export default EditTaskModal;
