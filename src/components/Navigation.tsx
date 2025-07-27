import { NavLink } from 'react-router';
const menus = [
  { name: 'Main', path: '/' },
  { name: 'About', path: '/about' },
];

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3 text-lg font-semibold">
        {menus.map((menu) => (
          <li key={menu.name}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                (isActive ? 'text-yellow-100' : 'hover:text-yellow-100') +
                ' transition-colors duration-300'
              }
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
