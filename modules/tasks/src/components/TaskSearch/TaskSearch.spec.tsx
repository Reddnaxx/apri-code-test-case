import { render } from '@testing-library/react';

import TaskSearch from './TaskSearch';

describe('TaskSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskSearch />);
    expect(baseElement).toBeTruthy();
  });
});
