import { render } from '@testing-library/react';

import RemoveTaskModal from './RemoveTaskModal';

describe('RemoveTaskModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RemoveTaskModal taskId="1" />);
    expect(baseElement).toBeTruthy();
  });
});
