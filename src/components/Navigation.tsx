import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', text: 'Início' },
    { to: '/our-story', text: 'Nossa História' },
    { to: '/gallery', text: 'Galeria' },
    { to: '/letters', text: 'Abra Quando...' },
    { to: '/quiz', text: 'Nosso Quiz' }, // <<< LINK ADICIONADO AQUI
    { to: '/future-dreams', text: 'Nossos Sonhos' },
  ];
  
  // Reorganizando a ordem do menu para melhor fluxo
  const menuOrder = ['/', '/our-story', '/gallery', '/letters', '/playlist', '/quiz', '/future-dreams'];
  const sortedNavLinks = navLinks.sort((a, b) => menuOrder.indexOf(a.to) - menuOrder.indexOf(b.to));

  const NavItem = ({ to, text }: { to: string, text: string }) => (
    <NavLink
      to={to}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `font-lato pb-1 border-b-2 transition-colors duration-300 ${
          isActive
            ? 'text-romantic-deepRose border-romantic-deepRose'
            : 'text-gray-600 border-transparent hover:text-romantic-rose'
        }`
      }
    >
      {text}
    </NavLink>
  );

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
            {sortedNavLinks.map((link) => <NavItem key={link.to} {...link} />)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-romantic-deepRose" /> : <Menu className="h-6 w-6 text-romantic-deepRose" />}
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
          {sortedNavLinks.map((link) => (
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