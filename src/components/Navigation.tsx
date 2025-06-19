import { Link, NavLink } from 'react-router-dom';
import { Menu, Heart } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

const Navigation = () => {
  const navLinks = [
    { to: '/', text: 'Início' },
    { to: '/our-story', text: 'Nossa História' },
    { to: '/gallery', text: 'Nossas Memórias' },
    { to: '/love-reasons', text: 'Por Que Te Amo' },
    { to: '/future-dreams', text: 'Nossos Sonhos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-romantic-rose" />
            <span className="font-vibes text-2xl text-romantic-deepRose">Nosso Cantinho</span>
          </Link>

          {/* --- MENU DESKTOP (Sem alterações) --- */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-poppins pb-1 border-b-2 transition-colors duration-300 whitespace-nowrap ${
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

          {/* === MENU MÓVEL PROFISSIONAL COM "SHEET" === */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Abrir menu">
                  <Menu className="h-6 w-6 text-romantic-deepRose" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-romantic-blush/95 backdrop-blur-md border-r-romantic-rose/20">
                <SheetHeader className="mb-8">
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-2">
                      <Heart className="h-6 w-6 text-romantic-rose" />
                      <span className="font-vibes text-xl text-romantic-deepRose">Nosso Cantinho</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `font-lato text-xl font-medium tracking-wider w-full text-left p-4 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'text-white bg-romantic-rose shadow-lg' 
                            : 'text-gray-700 hover:bg-white/70 hover:text-romantic-deepRose'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <SheetTrigger asChild>
                           <Link to={link.to}>{link.text}</Link>
                        </SheetTrigger>
                      )}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* === FIM DA SEÇÃO ATUALIZADA === */}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;