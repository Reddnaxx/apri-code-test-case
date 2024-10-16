import { TaskList, tasksStore } from '@app/tasks';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

export const Layout = observer(() => {
  const store = tasksStore;

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl">
      <TaskList tasks={store.parentTasks} className="flex-1 p-9" />
      <main className="flex-1 bg-[#DCE0E1]">
        <Outlet />
      </main>
    </div>
  );
});

export default Layout;
