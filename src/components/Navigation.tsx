import Link from 'next/link';
const menus = [
  { name: 'Main', path: '/' },
  { name: 'About', path: '/about' },
];

function Navigation() {
  const isActive = false;
  return (
    <nav>
      <ul className="flex items-center gap-3 text-lg font-semibold">
        {menus.map((menu) => (
          <li key={menu.name}>
            <Link
              href={menu.path}
              className={`transition-colors duration-300 ${
                isActive
                  ? 'text-gray-500 dark:text-yellow-100'
                  : 'hover:text-gray-500 dark:hover:text-yellow-100'
              }`}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
