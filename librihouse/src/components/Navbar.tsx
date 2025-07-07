

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpen, HomeIcon, Menu, Notebook, NotebookPen, X } from 'lucide-react'; // Optional: install `lucide-react`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home',icon: <HomeIcon/> },
    { to: '/books', label: 'All Books',icon: <BookOpen /> },
    { to: '/create-book', label: 'Add Book',icon:<NotebookPen /> },
    { to: '/borrow-summary', label: 'Borrow Summary', icon: <Notebook /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-800 to-orange-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">
        <img src="https://img.freepik.com/premium-vector/library-logo-business-company-simple-library-logotype-idea-design-corporate-identity-concept-creative-library-icon-from-accessories-collection_159242-4273.jpg" alt="Logo" className="inline-block h-8 mr-2 h-16 w-16" />
        Boighor
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:underline ${isActive ? 'font-semibold underline' : ''}`
              }
            >
              <div>
                <div className="flex items-center space-x-2">
                  {icon && <span className="text-lg">{icon}</span>}
                  <span>{label}</span>
                </div>
              </div>
             
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-amber-800 to-orange-900  px-4 pb-3 space-y-2">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-1 hover:underline ${isActive ? 'font-semibold underline' : ''}`
              }
            >

              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
