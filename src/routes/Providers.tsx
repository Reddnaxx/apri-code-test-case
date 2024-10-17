import { TaskStoreProvider } from '@app/tasks';
import { ModalProvider } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = observer(({ children }: ProvidersProps) => {
  return (
    <ModalProvider>
      <TaskStoreProvider>{children}</TaskStoreProvider>
    </ModalProvider>
  );
});

Providers.displayName = 'Providers';

export default Providers;
