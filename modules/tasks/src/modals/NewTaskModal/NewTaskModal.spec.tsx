import { render } from '@testing-library/react';

import NewTaskModal from './NewTaskModal';

describe('NewTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewTaskModal taskId="1" />);
    expect(baseElement).toBeTruthy();
  });
});
