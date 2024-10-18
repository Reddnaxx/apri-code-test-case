import { TaskStoreProvider } from '@app/tasks';
import { ModalProvider, ThemeProvider } from '@app/ui';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = observer(({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <TaskStoreProvider>{children}</TaskStoreProvider>
      </ModalProvider>
    </ThemeProvider>
  );
});

Providers.displayName = 'Providers';

export default Providers;
