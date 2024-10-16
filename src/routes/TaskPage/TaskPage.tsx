import { ITask } from '@app/tasks';
import { observer } from 'mobx-react-lite';
import { useLoaderData } from 'react-router-dom';

export const TaskPage = observer(() => {
  const task = useLoaderData() as ITask;

  return (
    <div className="h-full p-9 text-lg">
      <h2 className="mb-2 text-xl font-medium">{task.title}</h2>
      <p className="text-base font-normal">{task.text}</p>
    </div>
  );
});

TaskPage.displayName = 'TaskPage';

export default TaskPage;
