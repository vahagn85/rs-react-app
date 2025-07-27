import { Outlet } from 'react-router';
import App from '../components/App';

function HomeLayout() {
  return (
    <div className="h-full flex flex-wrap ">
      <div className="flex-1 border-r border-gray-400 p-2 bg-gray-100">
        <App />
      </div>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
