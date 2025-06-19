
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-romantic-rose/10 to-romantic-deepRose/10 border-t border-romantic-rose/20 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Heart className="h-8 w-8 text-romantic-rose mx-auto mb-4 animate-pulse-heart" />
          <p className="font-vibes text-2xl text-romantic-deepRose mb-2">
            "Em todo o mundo, nunca vai exister menina mais perfeita que voce."
          </p>
          <p className="font-poppins text-sm text-gray-600">— Maya Angelou</p>
        </div>
        
        <div className="border-t border-romantic-rose/20 pt-6">
          <p className="font-dancing text-lg text-romantic-deepRose mb-2">
            Juntos a quase 2 anos ✨
          </p>
          <p className="font-poppins text-sm text-gray-600">
            Para sempre e sempre, meu monene 💕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
