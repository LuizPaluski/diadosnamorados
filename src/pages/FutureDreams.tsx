
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const FutureDreams = () => {
  const dreams = [
    {
      icon: "🏡",
      title: "Our Dream Home",
      description: "A cozy place where we can build our life together, filled with laughter, love, and all our favorite memories. Maybe a garden where we can watch sunsets together."
    },
    {
      icon: "✈️",
      title: "Adventures Around the World",
      description: "Exploring new countries, experiencing different cultures, and creating unforgettable memories together. Every destination is better when you're by my side."
    },
    {
      icon: "👶",
      title: "Growing Our Family",
      description: "Imagining little versions of us running around, teaching them about love, kindness, and all the beautiful things in life. You'll be the most amazing mother."
    },
    {
      icon: "💍",
      title: "Forever Together",
      description: "Making our love official and promising to love each other through all of life's adventures. I can't wait to call you my wife and spend eternity with you."
    },
    {
      icon: "🎓",
      title: "Supporting Each Other's Dreams",
      description: "Cheering each other on as we pursue our individual goals and dreams, always being each other's biggest supporter and celebrating every success together."
    },
    {
      icon: "🌅",
      title: "Growing Old Together",
      description: "Sitting on our porch when we're old and gray, still holding hands, still laughing together, and still as much in love as we are today - maybe even more."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-6">
            Our Future Dreams
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-3xl mx-auto mb-8">
            Together we dream of a beautiful future filled with love, adventure, and endless possibilities. 
            Here are the dreams my heart holds for us.
          </p>
          <div className="text-4xl animate-float">✨</div>
        </div>

        {/* Dreams Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dreams.map((dream, index) => (
              <div
                key={index}
                className="romantic-card hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:animate-float">
                    {dream.icon}
                  </div>
                  <h3 className="font-dancing text-3xl text-romantic-deepRose mb-4">
                    {dream.title}
                  </h3>
                </div>
                <p className="font-poppins text-gray-600 leading-relaxed text-center">
                  {dream.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Promise Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="romantic-card text-center max-w-4xl mx-auto">
            <h2 className="font-vibes text-4xl text-romantic-deepRose mb-6">
              My Promise to You
            </h2>
            <p className="font-dancing text-xl text-romantic-rose leading-relaxed mb-6">
              I promise to love you through every season of life, to support your dreams as if they were my own, 
              to hold your hand through every challenge, and to celebrate every joy with you. 
              Together, we can make all our dreams come true.
            </p>
            <div className="flex justify-center items-center gap-4 text-2xl">
              <span>💕</span>
              <span className="font-poppins text-romantic-deepRose">Forever Yours</span>
              <span>💕</span>
            </div>
          </div>
        </div>

        {/* Vision Board Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="text-center mb-8">
            <h2 className="font-dancing text-3xl text-romantic-deepRose mb-4">
              Our Dream Vision
            </h2>
            <p className="font-poppins text-gray-600">
              Every dream starts with a vision, and ours is painted with love
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="aspect-square bg-gradient-to-br from-romantic-pink to-romantic-blush rounded-2xl flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-300">
              🏠
            </div>
            <div className="aspect-square bg-gradient-to-br from-romantic-rose to-romantic-deepRose rounded-2xl flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-300">
              ❤️
            </div>
            <div className="aspect-square bg-gradient-to-br from-romantic-gold to-yellow-400 rounded-2xl flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-300">
              🌟
            </div>
            <div className="aspect-square bg-gradient-to-br from-romantic-cream to-romantic-pink rounded-2xl flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-300">
              🥰
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SecretHeartButton />
    </div>
  );
};

export default FutureDreams;
