import { TaskList, tasksStore } from '@app/tasks';

import { observer } from 'mobx-react-lite';

export const App = observer(() => {
  const store = tasksStore;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get('title') as string;
          const text = formData.get('text') as string;
          const parentId = formData.get('parentId') as string | undefined;
          if (title) {
            store.addTask(
              {
                id: Date.now().toString(),
                title,
                completed: false,
                text,
              },
              parentId
            );
            e.currentTarget.reset();
          }
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Введите название новой задачи"
          className="mr-2 rounded border border-gray-300 px-2 py-1"
          required
        />
        <input
          type="text"
          name="text"
          placeholder="Введите текст новой задачи"
          className="mr-2 rounded border border-gray-300 px-2 py-1"
          required
        />
        <input
          type="text"
          name="parentId"
          placeholder="Введите id родителя (необязательно)"
          className="mr-2 rounded border border-gray-300 px-2 py-1"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-1 text-white"
        >
          Добавить
        </button>
      </form>
      <TaskList tasks={store.parentTasks} />
    </div>
  );
});

export default App;
