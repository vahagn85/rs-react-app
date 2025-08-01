import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import ThemeProvider from './ThemeProvider';
import { ThemeContext } from './ThemeContext';
import userEvent from '@testing-library/user-event';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <span data-testid="theme">{theme}</span>
      <button onClick={() => setTheme('dark')}>dark</button>
      <button onClick={() => setTheme('light')}>light</button>
    </>
  );
}
describe('ThemeProvider Context', () => {
  it('should default to light theme', () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('should switches to dark when button(dark) is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    await user.click(screen.getByRole('button', { name: /dark/i }));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });
});
