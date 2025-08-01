import type { Theme } from '../../types/theme.types';

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === 'light') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M12 4a1 1 0 011 1v1a1 1 0 01-2 0V5a1 1 0 011-1zm0 13a5 5 0 100-10 5 5 0 000 10zm0 4a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm8-8a1 1 0 011 1h1a1 1 0 010 2h-1a1 1 0 01-1-1 1 1 0 011-1zm-16 0a1 1 0 01-1 1H2a1 1 0 010-2h1a1 1 0 011 1zm12.071-6.071a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-10.142 0a1 1 0 010 1.414l-.707.707A1 1 0 013.515 9.05l.707-.707a1 1 0 011.414 0zm10.142 10.142a1 1 0 011.414 0l.707.707A1 1 0 0118.485 21l-.707-.707a1 1 0 010-1.414zm-10.142 0a1 1 0 010 1.414l-.707.707A1 1 0 013.515 21l.707-.707a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M21.707 15.293A8 8 0 1112.707 4.293a6 6 0 109 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default ThemeIcon;
