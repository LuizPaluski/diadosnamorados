// src/pages/Index.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';
import CountdownTimer from '@/components/CountdownTimer'; // Verifique se esta linha existe

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-blush via-romantic-pink to-romantic-cream opacity-80"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`absolute text-romantic-rose opacity-20 animate-float`} style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%`, animationDelay: `${i * 0.5}s`, fontSize: `${1.5 + i * 0.5}rem` }}>
              ♥
            </div>
          ))}
        </div>

        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
            <img src="/lovable-uploads/a9c67f05-fd3d-4774-b45a-fb159039b37f.png" alt="Minha Linda Namorada" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>

          <h1 className="font-parisienne text-6xl md:text-8xl text-romantic-deepRose mb-6 animate-fade-in">
            Meu Girassol
          </h1>
          
          <p className="font-garamond text-2xl md:text-3xl text-romantic-rose mb-8 max-w-3xl mx-auto leading-relaxed">
            Monene, teu sorriso é como um girassol virado para mim.
            Em voce mora a luz que aquece meus dias e me deixa mais feliz.
            Te amo em cada detalhe, sem voce eu nao sou nada.
            Quero voce ao meu lado ate ficarmos velhinhos.
            Te amo meu amor, obrigado por ser tudo na minha vida.
            Te amo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" className="love-button">
              Nossas Memórias
            </Link>
            <Link to="/love-reasons" className="love-button bg-gradient-to-r from-romantic-gold to-yellow-500">
              Por Que Te Amo
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DO CONTADOR --- */}
      <section className="py-10 px-4">
        <CountdownTimer />
      </section>
      {/* ------------------------- */}

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="romantic-card text-center hover:scale-105 transition-transform duration-300">
              <h3 className="font-garamond text-3xl text-romantic-deepRose mb-4">Nossa História</h3>
              <p className="font-lato text-gray-600 mb-6">
                Desde o primeiro momento que nossos olhos se encontraram, eu soube que você mudaria minha vida para sempre...
              </p>
              <Link to="/our-story" className="inline-block love-button">
                Ler Nossa História
              </Link>
            </div>

            <div className="romantic-card text-center hover:scale-105 transition-transform duration-300">
              <h3 className="font-garamond text-3xl text-romantic-deepRose mb-4">Nossas Lembranças</h3>
              <p className="font-lato text-gray-600 mb-6">
                Cada foto conta uma história do nosso amor, capturando os momentos lindos que vivemos juntos...
              </p>
              <Link to="/gallery" className="inline-block love-button">
                Ver Galeria
              </Link>
            </div>

            <div className="romantic-card text-center hover:scale-105 transition-transform duration-300">
              <h3 className="font-garamond text-3xl text-romantic-deepRose mb-4">Nosso Futuro</h3>
              <p className="font-lato text-gray-600 mb-6">
                Juntos vamos construir um futuro cheio de amor, risadas e aventuras sem fim...
              </p>
              <Link to="/future-dreams" className="inline-block love-button">
                Nossos Sonhos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SecretHeartButton />
    </div>
  );
};

export default Index;