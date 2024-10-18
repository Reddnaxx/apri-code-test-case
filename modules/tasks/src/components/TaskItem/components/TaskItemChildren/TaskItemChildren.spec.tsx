import { render } from '@testing-library/react';

import TaskItemChildren from './TaskItemChildren';

describe('TaskItemChildren', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskItemChildren visible children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
