import { ModalProvider } from '@app/ui';
import { render } from '@testing-library/react';
import { TaskStoreProvider } from '../../contexts/taskStoreContext';
import EditTaskModal from './EditTaskModal';

describe('EditTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ModalProvider>
        <TaskStoreProvider>
          <EditTaskModal taskId="1" />
        </TaskStoreProvider>
      </ModalProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
