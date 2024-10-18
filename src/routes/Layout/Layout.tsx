import { TaskList } from '@app/tasks';
import { Modal, ToggleThemeButton } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import Providers from '../Providers';

export const Layout = observer(() => {
  return (
    <Providers>
      <div className="mx-auto flex min-h-screen max-w-screen-xl">
        <TaskList className="flex-1 pr-9 pt-9" />
        <main className="flex-1 bg-[#DCE0E1] dark:bg-zinc-800">
          <Outlet />
        </main>
      </div>
      <Modal />
      <ToggleThemeButton className="fixed bottom-4 right-4" />
    </Providers>
  );
});

export default Layout;
