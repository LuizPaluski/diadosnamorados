import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- LISTA DE LINKS CORRIGIDA E ATUALIZADA ---
  // Apenas as páginas que existem no seu projeto
  const navLinks = [
    { to: '/', text: 'Início' },
    { to: '/gallery', text: 'Nossas Memórias' },
    { to: '/love-reasons', text: 'Por Que Te Amo' },
    { to: '/our-story', text: 'Nossa História' },
    { to: '/future-dreams', text: 'Nossos Sonhos' },
  ];
  // ---------------------------------------------

  const NavItem = ({ to, text }: { to: string, text: string }) => (
    <NavLink
      to={to}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `font-lato pb-1 border-b-2 transition-colors duration-300 whitespace-nowrap ${
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
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-romantic-rose" />
            <span className="font-parisienne text-2xl text-romantic-deepRose">Nosso Cantinho</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 overflow-x-auto">
            {navLinks.map((link) => <NavItem key={link.to} {...link} />)}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
              {isOpen ? <X className="h-6 w-6 text-romantic-deepRose" /> : <Menu className="h-6 w-6 text-romantic-deepRose" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Móvel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-romantic-blush/95 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} aria-label="Fechar menu">
            <X className="h-6 w-6 text-romantic-deepRose" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-4 px-8">
          {navLinks.map((link) => (
             <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-lato text-2xl font-medium tracking-wider w-full text-center p-4 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-romantic-rose scale-105 shadow-lg' 
                    : 'text-gray-700 hover:bg-white/70 hover:text-romantic-deepRose'
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