import { ModalProvider } from '@app/ui';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TaskStoreProvider } from '../../contexts/taskStoreContext';
import { TasksStore } from '../../store/tasks-store';
import TaskItem from './TaskItem';

describe('TaskItem', () => {
  it('should render successfully', () => {
    const store = new TasksStore();
    store.addTask({
      title: 'Test task',
      text: 'Test text',
      completed: false,
    });

    const task = store.tasks[0];

    const { baseElement } = render(
      <ModalProvider>
        <TaskStoreProvider>
          <TaskItem {...task} />
        </TaskStoreProvider>
      </ModalProvider>,
      { wrapper: BrowserRouter }
    );
    expect(baseElement).toBeTruthy();
  });
});
