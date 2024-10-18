import { render } from '@testing-library/react';

import ToggleThemeButton from './ToggleThemeButton';

describe('ToggleThemeButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleThemeButton />);
    expect(baseElement).toBeTruthy();
  });
});
