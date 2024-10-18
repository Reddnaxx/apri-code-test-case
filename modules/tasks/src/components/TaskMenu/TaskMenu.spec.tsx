import { render } from '@testing-library/react';

import { ModalProvider } from '@app/ui';
import { TasksStore } from '../../store/tasks-store';
import TaskMenu from './TaskMenu';

beforeEach(() => {
  const tasksStore = new TasksStore();

  tasksStore.addTask({
    title: 'Test task 1',
    text: 'Test text 1',
    completed: false,
  });
});

describe('TaskMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ModalProvider>
        <TaskMenu taskId="1" setIsMenuOpen={() => undefined} visible />
      </ModalProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
