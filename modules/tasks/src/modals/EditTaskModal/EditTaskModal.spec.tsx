import { render } from '@testing-library/react';

import EditTaskModal from './EditTaskModal';

describe('EditTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditTaskModal taskId="1" />);
    expect(baseElement).toBeTruthy();
  });
});
