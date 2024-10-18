import { ModalProvider } from '@app/ui';
import { render } from '@testing-library/react';
import { TaskStoreProvider } from '../../contexts/taskStoreContext';
import RemoveTaskModal from './RemoveTaskModal';

describe('RemoveTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ModalProvider>
        <TaskStoreProvider>
          <RemoveTaskModal taskId="1" />
        </TaskStoreProvider>
      </ModalProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
