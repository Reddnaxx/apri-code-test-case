import { TaskList, tasksStore } from '@app/tasks';

import { observer } from 'mobx-react-lite';

export const App = observer(() => {
  const store = tasksStore;

  return (
    <div>
      <TaskList tasks={store.tasks} />
    </div>
  );
});

export default App;
