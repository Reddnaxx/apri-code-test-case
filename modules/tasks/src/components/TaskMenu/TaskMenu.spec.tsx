import { render } from '@testing-library/react';

import TaskMenu from './TaskMenu';

describe('TaskMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskMenu />);
    expect(baseElement).toBeTruthy();
  });
});
