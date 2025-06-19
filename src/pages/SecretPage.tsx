
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

const SecretPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Mysterious Entry */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {!isRevealed ? (
              <div className="animate-fade-in">
                <Heart className="h-16 w-16 text-romantic-rose mx-auto mb-8 animate-pulse-heart" />
                <h1 className="font-vibes text-4xl text-romantic-deepRose mb-4">
                  Você achou o segredo! 💕
                </h1>
                <p className="font-dancing text-xl text-romantic-rose">
                  Revelando sua surpresa em um momento...
                </p>
              </div>
            ) : (
              <div className="animate-fade-in">
                {/* Secret Revealed */}
                <div className="romantic-card">
                  <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-8">
                    Seu Presente Te Espera! 🎁
                  </h1>
                  
                  <div className="mb-8">
                    <div className="text-6xl mb-6 animate-float">💖</div>
                    <h2 className="font-dancing text-3xl text-romantic-rose mb-6">
                      Meu amor, eu tenho algo especial esperando por você...
                    </h2>
                  </div>

                  {/* Gift Location */}
                  <div className="bg-gradient-to-r from-romantic-gold/20 to-yellow-400/20 rounded-2xl p-8 mb-8 border-2 border-romantic-gold/30">
                    <h3 className="font-dancing text-2xl text-romantic-deepRose mb-4">
                      🗺️ Onde Encontrar Sua Surpresa:
                    </h3>
                    <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                      <strong>Procure em algum lugar que a gente nunca repara, e se repara e so quando a gente entra no banho hihi. ✨</strong>
                    </p>
                    <p className="font-dancing text-romantic-rose mt-4 text-lg">
                      (sera que voce vai achar?!)
                    </p>
                  </div>

                  {/* Love Message */}
                  <div className="border-l-4 border-romantic-rose pl-6 mb-8">
                    <p className="font-dancing text-xl text-romantic-deepRose leading-relaxed">
                      "Este site é apenas o começo de como quero mostrar meu amor por você. 
                      Você merece ser celebrada todos os dias, e espero que esta pequena surpresa 
                      te lembre do quão incrivelmente especial você é para mim. Eu te amo mais 
                      do que tudo nesse mundo, quero crescer com voce, invelhecer com voce
                      construir um mundo com voce, VOCE E TUDO TUDO TUDO E MAIS UM POUCO 
                      NA MINHA VIDA.  Te amo minha princesa  ❤️"
                    </p>
                  </div>

                  {/* Special Instructions */}
                  <div className="bg-romantic-blush rounded-2xl p-6">
                    <h4 className="font-dancing text-xl text-romantic-deepRose mb-3">
                      💌 Instruções Especiais:
                    </h4>
                    <ul className="font-poppins text-gray-600 text-left space-y-2">
                      <li>• Feche os olhos e faça um pedido antes de abrir</li>
                      <li>• Saiba que cada momento criando isso foi cheio de amor por você</li>
                      <li>• Lembre-se que esta é apenas uma das muitas surpresas que eu vou fazer para voce ao longo da nossa vida</li>
                      <li>• Venha me encontrar para dar o maior abraco e beijo gostoso da sua vida em mim pfv pfv pfv! 🤗</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-center items-center gap-4 text-2xl">
                    <span>💕</span>
                    <span className="font-poppins text-romantic-deepRose">Do seu amor Luiz</span>
                    <span>💕</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecretPage;
