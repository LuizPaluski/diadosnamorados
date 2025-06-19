import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- LISTA COMPLETA DE LINKS ---
  const navLinks = [
    { to: '/', text: 'Início' },
    { to: '/our-story', text: 'Nossa História' },
    { to: '/gallery', text: 'Galeria' },
    { to: '/love-reasons', text: 'Por Que Te Amo' },
    { to: '/letters', text: 'Abra Quando...' },
    { to: '/quiz', text: 'Nosso Quiz' },
    { to: '/future-dreams', text: 'Nossos Sonhos' },
  ];
  // ---------------------------------

  const menuOrder = ['/', '/our-story', '/gallery', '/love-reasons', '/letters', '/quiz', '/future-dreams'];
  const sortedNavLinks = navLinks.sort((a, b) => menuOrder.indexOf(a.to) - menuOrder.indexOf(b.to));

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

          {/* Desktop Menu - agora com scroll horizontal se necessário */}
          <div className="hidden lg:flex items-center space-x-6 overflow-x-auto">
            {sortedNavLinks.map((link) => <NavItem key={link.to} {...link} />)}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
              {isOpen ? <X className="h-6 w-6 text-romantic-deepRose" /> : <Menu className="h-6 w-6 text-romantic-deepRose" />}
            </button>
          </div>
        </div>
      </nav>

      {/* === MENU MÓVEL CORRIGIDO E COMPLETO === */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} aria-label="Fechar menu">
            <X className="h-6 w-6 text-romantic-deepRose" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-4 px-8">
          {sortedNavLinks.map((link) => (
             <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-lato text-2xl font-medium tracking-wider w-full text-center p-4 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-romantic-rose scale-105 shadow-lg' 
                    : 'text-gray-700 hover:bg-romantic-blush hover:text-romantic-deepRose'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
      {/* === FIM DA SEÇÃO CORRIGIDA === */}
    </header>
  );
};

export default Navigation;