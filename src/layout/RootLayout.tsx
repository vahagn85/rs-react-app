import { Outlet } from 'react-router';
import Header from '../components/Header';
import Flyout from '../components/Flyout';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen h-[1px]">
      <Header />
      <main className="bg-gray-100 flex-1">
        <Outlet />
      </main>
      <Flyout />
    </div>
  );
}

export default RootLayout;
