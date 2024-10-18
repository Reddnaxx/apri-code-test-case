import { render } from '@testing-library/react';

import { TaskStoreProvider } from '../../contexts/taskStoreContext';
import TaskSearch from './TaskSearch';

describe('TaskSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TaskStoreProvider>
        <TaskSearch
          onChange={() => undefined}
          onStartSearch={() => undefined}
          onEndSearch={() => undefined}
        />
      </TaskStoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
