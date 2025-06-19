
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';
import { Heart } from 'lucide-react';

const LoveReasons = () => {
  const reasons = [
    {
      title: "Your Beautiful Smile",
      description: "Your smile lights up my entire world and makes every day brighter. It's the first thing I think about when I wake up and the last thing I see before I sleep."
    },
    {
      title: "Your Kind Heart",
      description: "The way you care for others and show compassion to everyone around you makes me fall in love with you more each day."
    },
    {
      title: "Your Infectious Laugh",
      description: "Your laughter is music to my ears. It fills our home with joy and reminds me that life is meant to be celebrated with you."
    },
    {
      title: "Your Intelligence",
      description: "Your brilliant mind amazes me constantly. The way you think, solve problems, and see the world inspires me to be better."
    },
    {
      title: "Your Dreams",
      description: "I love how passionate you are about your goals and dreams. Supporting you and watching you shine brings me incredible happiness."
    },
    {
      title: "Your Gentle Touch",
      description: "The way you hold my hand, give the best hugs, and make me feel safe and loved with just your touch is magical."
    },
    {
      title: "Your Strength",
      description: "You face challenges with such grace and determination. Your strength inspires me and makes me proud to be by your side."
    },
    {
      title: "Your Love for Life",
      description: "You find joy in the smallest moments and teach me to appreciate every blessing we have together."
    },
    {
      title: "The Way You Love Me",
      description: "You love me completely, flaws and all. You make me feel worthy, cherished, and like the luckiest person alive."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-6">
            Why I Love You
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-3xl mx-auto mb-8">
            There are countless reasons why you're the love of my life. Here are just a few that make my heart overflow with love for you every single day.
          </p>
          <Heart className="h-12 w-12 text-romantic-rose mx-auto animate-pulse-heart" />
        </div>

        {/* Reasons Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="romantic-card hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <Heart className="h-8 w-8 text-romantic-rose mx-auto mb-4 group-hover:animate-pulse-heart" />
                  <h3 className="font-dancing text-2xl text-romantic-deepRose mb-4">
                    {reason.title}
                  </h3>
                </div>
                <p className="font-poppins text-gray-600 leading-relaxed text-center">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Love Message */}
        <div className="container mx-auto px-4 mt-16">
          <div className="romantic-card text-center max-w-4xl mx-auto">
            <h2 className="font-vibes text-4xl text-romantic-deepRose mb-6">
              And So Much More...
            </h2>
            <p className="font-dancing text-xl text-romantic-rose leading-relaxed">
              Every day with you, I discover new reasons to love you. You are my heart, my soul, 
              my everything. Thank you for being the amazing woman you are and for choosing to 
              share your beautiful life with me. I love you more than words could ever express. ❤️
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <SecretHeartButton />
    </div>
  );
};

export default LoveReasons;
