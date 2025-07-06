// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { to: '/', label: 'All Books' },
    { to: '/create-book', label: 'Add Book' },
    { to: '/borrow-summary', label: 'Borrow Summary' },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">📚 Library</Link>
        <div className="space-x-6">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:underline ${isActive ? 'font-semibold underline' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
