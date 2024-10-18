import { ModalProvider } from '@app/ui';
import { render } from '@testing-library/react';
import { TaskStoreProvider } from '../../contexts/taskStoreContext';
import NewTaskModal from './NewTaskModal';

describe('NewTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ModalProvider>
        <TaskStoreProvider>
          <NewTaskModal />
        </TaskStoreProvider>
      </ModalProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
