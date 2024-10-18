import { ThemeProvider } from '@app/ui';
import { render } from '@testing-library/react';
import ToggleThemeButton from './ToggleThemeButton';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
    })),
  });
});

describe('ToggleThemeButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <div>
        <ThemeProvider>
          <ToggleThemeButton />
        </ThemeProvider>
      </div>
    );
    expect(baseElement).toBeTruthy();
  });
});
