import { TaskList } from '@app/tasks';
import { Modal } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import Providers from '../Providers';

export const Layout = observer(() => {
  return (
    <Providers>
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-screen-xl">
        <TaskList className="flex-1 pr-9 pt-9" />
        <main className="flex-1 bg-[#DCE0E1]">
          <Outlet />
        </main>
      </div>
      <Modal />
    </Providers>
  );
});

export default Layout;
