import ThemeButton from './ThemeButton';

function ThemeSwitcher() {
  return (
    <div
      role="radiogroup"
      className="flex gap-2 border border-gray-300 px-2 py-1 rounded bg-gray-500 dark:bg-gray-300 ml-1"
    >
      <ThemeButton mode="light" />
      <ThemeButton mode="dark" />
    </div>
  );
}

export default ThemeSwitcher;
