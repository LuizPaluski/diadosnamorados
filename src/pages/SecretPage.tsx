
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
                  You found the secret! 💕
                </h1>
                <p className="font-dancing text-xl text-romantic-rose">
                  Revealing your surprise in just a moment...
                </p>
              </div>
            ) : (
              <div className="animate-fade-in">
                {/* Secret Revealed */}
                <div className="romantic-card">
                  <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-8">
                    Your Gift Awaits! 🎁
                  </h1>
                  
                  <div className="mb-8">
                    <div className="text-6xl mb-6 animate-float">💖</div>
                    <h2 className="font-dancing text-3xl text-romantic-rose mb-6">
                      My darling, I have something special waiting for you...
                    </h2>
                  </div>

                  {/* Gift Location */}
                  <div className="bg-gradient-to-r from-romantic-gold/20 to-yellow-400/20 rounded-2xl p-8 mb-8 border-2 border-romantic-gold/30">
                    <h3 className="font-dancing text-2xl text-romantic-deepRose mb-4">
                      🗺️ Where to Find Your Surprise:
                    </h3>
                    <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                      <strong>Look under our bed, on your side, in the little wooden box we bought together. 
                      Inside you'll find something that represents my promise to love you forever. ✨</strong>
                    </p>
                    <p className="font-dancing text-romantic-rose mt-4 text-lg">
                      (Or replace this with the actual location of your gift!)
                    </p>
                  </div>

                  {/* Love Message */}
                  <div className="border-l-4 border-romantic-rose pl-6 mb-8">
                    <p className="font-dancing text-xl text-romantic-deepRose leading-relaxed">
                      "This website is just the beginning of how I want to show you my love. 
                      You deserve to be celebrated every single day, and I hope this little surprise 
                      reminds you of how incredibly special you are to me. I love you more than words 
                      can express, more than this website can show, and more than you'll ever know. ❤️"
                    </p>
                  </div>

                  {/* Special Instructions */}
                  <div className="bg-romantic-blush rounded-2xl p-6">
                    <h4 className="font-dancing text-xl text-romantic-deepRose mb-3">
                      💌 Special Instructions:
                    </h4>
                    <ul className="font-poppins text-gray-600 text-left space-y-2">
                      <li>• Close your eyes and make a wish before opening it</li>
                      <li>• Know that every moment creating this was filled with love for you</li>
                      <li>• Remember that this is just one of many surprises I have planned</li>
                      <li>• Come find me for the biggest hug when you're done! 🤗</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-center items-center gap-4 text-2xl">
                    <span>💕</span>
                    <span className="font-poppins text-romantic-deepRose">With All My Love</span>
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
