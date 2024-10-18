import { render } from '@testing-library/react';

import Menu from './Menu';

describe('Menu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menu setIsMenuOpen={() => undefined} visible>
        <div>Test children</div>
      </Menu>
    );
    expect(baseElement).toBeTruthy();
  });
});
