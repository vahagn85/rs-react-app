import { Link } from 'react-router';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-4xl flex items-center justify-between p-4 mx-auto">
        <Link
          to="/"
          className="text-2xl font-black md:text-3xl text-[#FFE81F] uppercase "
        >
          Star Wars
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
