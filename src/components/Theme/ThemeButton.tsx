import { useTheme } from '../../hooks/useTheme';
import type { Theme } from '../../types/theme.types';
import ThemeIcon from './ThemeIcon';

interface ThemeButtonProps {
  mode: Theme;
}

function ThemeButton({ mode }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      role="radio"
      aria-checked={theme === mode}
      aria-label={`Switch to ${mode}`}
      onClick={() => setTheme(mode)}
      className={`flex items-center justify-center w-8 h-8 rounded-md border cursor-pointer
            ${theme === mode ? 'bg-white text-black dark:bg-gray-700 dark:text-white' : 'bg-transparent text-white dark:text-gray-700'}
            hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white
            transition-colors`}
    >
      <ThemeIcon theme={mode} />
    </button>
  );
}

export default ThemeButton;
