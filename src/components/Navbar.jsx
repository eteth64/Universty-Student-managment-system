import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Navigation items configuration
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/register-student', label: 'Register' },
  ];

  return (
    <nav className="bg-blue-700 text-white shadow-md" aria-label="Main navigation">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink
            to="/"
            className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            UniversitySys
          </NavLink>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-gray-300 text-lg px-3 py-2 rounded transition-colors ${isActive ? 'bg-blue-600 text-white' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `bg-white text-blue-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded text-lg ${isActive ? 'ring-2 ring-blue-300' : ''
              }`
            }
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`w-full md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 text-center bg-blue-800 rounded-lg p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-300 text-lg py-2 px-4 rounded transition-colors ${isActive ? 'bg-blue-600 text-white' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded text-lg"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;