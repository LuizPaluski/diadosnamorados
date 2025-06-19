// src/components/Navigation.tsx

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { to: '/our-story', text: 'Nossa História' },
  { to: '/gallery', text: 'Galeria' },
  { to: '/love-reasons', text: '100 Motivos' },
  { to: '/letters', text: 'Abra Quando...' }, // <<< LINK ADICIONADO AQUI
  { to: '/future-dreams', text: 'Nossos Sonhos' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-romantic-rose" />
            <span className="font-parisienne text-2xl text-romantic-deepRose">Nosso Cantinho</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-lato font-medium pb-1 border-b-2 transition-colors duration-300 ${
                    isActive
                      ? 'text-romantic-deepRose border-romantic-deepRose'
                      : 'text-gray-600 border-transparent hover:text-romantic-rose'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6 text-romantic-deepRose" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6 text-romantic-deepRose" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-garamond text-3xl ${
                  isActive ? 'text-romantic-deepRose' : 'text-gray-600'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;