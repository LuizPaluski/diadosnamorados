
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-blush via-romantic-pink to-romantic-cream opacity-80"></div>
        
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-romantic-rose opacity-20 animate-float`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${1.5 + i * 0.5}rem`
              }}
            >
              ♥
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image Placeholder */}
          <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
              alt="My Beautiful Girlfriend"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          <h1 className="font-vibes text-6xl md:text-8xl text-romantic-deepRose mb-6 animate-fade-in">
            My Beautiful Angel
          </h1>
          
          <p className="font-dancing text-2xl md:text-3xl text-romantic-rose mb-8 max-w-3xl mx-auto leading-relaxed">
            You are the sunshine that brightens my darkest days, the melody that makes my heart sing, 
            and the love that completes my soul. Every moment with you is a precious gift.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" className="love-button">
              See Our Memories
            </Link>
            <Link to="/love-reasons" className="love-button bg-gradient-to-r from-romantic-gold to-yellow-500">
              Why I Love You
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Story Preview */}
            <div className="romantic-card text-center hover:scale-105 transition-transform duration-300">
              <h3 className="font-dancing text-3xl text-romantic-deepRose mb-4">Our Love Story</h3>
              <p className="font-poppins text-gray-600 mb-6">
                From the first moment our eyes met, I knew you were the one who would change my life forever...
              </p>
              <Link to="/our-story" className="inline-block love-button">
                Read Our Story
              </Link>
            </div>

            {/* Gallery Preview */}
            <div className="romantic-card text-center hover:scale-105 transition-transform duration-300">
              <h3 className="font-dancing text-3xl text-romantic-deepRose mb-4">Our Memories</h3>
              <p className="font-poppins text-gray-600 mb-6">
                Every photo tells a story of our love, capturing the beautiful moments we've shared together...
              </p>
              <Link to="/gallery" className="inline-block love-button">
                View Gallery
              </Link>
            </div>

            {/* Dreams Preview */}
            <div className="romantic-card text-center hover:scale-105 transition-transform duration-300">
              <h3 className="font-dancing text-3xl text-romantic-deepRose mb-4">Our Future</h3>
              <p className="font-poppins text-gray-600 mb-6">
                Together we'll build a future filled with love, laughter, and endless adventures...
              </p>
              <Link to="/future-dreams" className="inline-block love-button">
                Our Dreams
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
