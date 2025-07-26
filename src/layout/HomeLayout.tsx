import { Outlet } from 'react-router';
import App from '../components/App';

function HomeLayout() {
  return (
    <div className="flex flex-wrap ">
      <div className="flex-1 border-r border-gray-400 p-2">
        <App />
      </div>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
