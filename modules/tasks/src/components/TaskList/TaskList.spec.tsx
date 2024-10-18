import { render } from '@testing-library/react';
import { TaskStoreProvider } from '../../contexts/taskStoreContext';
import TaskList from './TaskList';

describe('TaskList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TaskStoreProvider>
        <TaskList />
      </TaskStoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
