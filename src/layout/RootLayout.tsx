import { Outlet } from 'react-router';
import Header from '../components/Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 min-h-[calc(100vh-68px)]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
