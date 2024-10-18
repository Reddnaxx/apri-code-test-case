import { render } from '@testing-library/react';

import TasksNotFound from './TasksNotFound';

describe('TasksNotFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksNotFound />);
    expect(baseElement).toBeTruthy();
  });
});
