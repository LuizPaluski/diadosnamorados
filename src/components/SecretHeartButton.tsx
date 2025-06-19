
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecretHeartButton = () => {
  return (
    <Link
      to="/secret-treasure"
      className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-romantic-rose to-romantic-deepRose rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-heart opacity-70 hover:opacity-100"
      title="❤️"
    >
      <Heart className="h-6 w-6 text-white fill-current" />
    </Link>
  );
};

export default SecretHeartButton;
