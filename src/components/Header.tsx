import Navigation from './Navigation';
import ThemeSwitcher from './Theme/ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '../i18n/navigation';

function Header() {
  return (
    <header className="dark:bg-gray-800 dark:text-white bg-white text-gray-800 border-b border-gray-400">
      <div className="max-w-4xl flex items-center justify-between p-4 mx-auto">
        <Link
          href="/"
          className="text-2xl font-black md:text-3xl text-[#FFE81F] uppercase "
        >
          Star Wars
        </Link>
        <Navigation />
        <div className="flex flex-wrap items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
