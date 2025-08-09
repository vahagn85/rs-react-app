import { Outlet } from 'react-router';
import Header from '../components/Header';
import Flyout from '../components/Flyout';
import { useTheme } from '../hooks/useTheme';

function RootLayout() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col min-h-screen h-[1px] ${theme === 'dark' ? 'dark' : ''}`}
    >
      <Header />
      <main className="bg-gray-100 dark:bg-gray-600 flex-1">
        <Outlet />
      </main>
      <Flyout />
    </div>
  );
}

export default RootLayout;
