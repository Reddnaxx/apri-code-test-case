import { TaskList } from '@app/tasks';
import { Modal } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import Providers from '../Providers';

export const Layout = observer(() => {
  return (
    <Providers>
      <div className="mx-auto flex min-h-screen max-w-screen-xl">
        <TaskList className="flex-1 p-9" />
        <main className="flex-1 bg-[#DCE0E1]">
          <Outlet />
        </main>
      </div>
      <Modal />
    </Providers>
  );
});

export default Layout;
