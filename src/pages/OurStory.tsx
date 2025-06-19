
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const OurStory = () => {
  const storyChapters = [
    {
      title: "The First Glance",
      date: "Chapter 1",
      content: "It was a moment that changed everything. When our eyes first met, time seemed to stop. I knew in that instant that my life would never be the same. There was something magical about that first glance - a spark that would grow into the most beautiful love story."
    },
    {
      title: "Getting to Know You",
      date: "Chapter 2", 
      content: "Every conversation revealed another layer of your beautiful soul. Your laugh became my favorite sound, your thoughts captivated my mind, and your dreams became dreams I wanted to help make come true. I found myself falling deeper with every word we shared."
    },
    {
      title: "Our First Date",
      date: "Chapter 3",
      content: "Nervous excitement filled the air as we embarked on our first official date. Every moment was perfect - the way you smiled, the stories we shared, the comfortable silences. I knew that night that I wanted to spend every day getting to know you better."
    },
    {
      title: "Falling in Love",
      date: "Chapter 4",
      content: "It happened gradually, then all at once. Love crept into my heart and made itself at home. Your kindness, your beauty inside and out, your way of making everything better - I found myself completely and utterly in love with every part of you."
    },
    {
      title: "Our Adventures",
      date: "Chapter 5",
      content: "Together we've explored new places, tried new things, and created memories that will last a lifetime. Every adventure with you is my favorite adventure. Whether we're traveling the world or just cuddled up at home, every moment is an adventure when I'm with you."
    },
    {
      title: "Building Our Life",
      date: "Chapter 6",
      content: "Day by day, we've built something beautiful together. Our inside jokes, our traditions, our dreams for the future - we've created a love that feels like home. You've become not just my partner, but my best friend and my greatest love."
    },
    {
      title: "Forever and Always",
      date: "Chapter ∞",
      content: "This is just the beginning of our story. Every day I wake up grateful to call you mine and excited to write new chapters together. Our love story is my favorite story, and I can't wait to see what beautiful adventures await us in the chapters yet to come."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-6">
            Our Love Story
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-3xl mx-auto">
            A beautiful journey of two hearts finding their way to each other and creating something magical together
          </p>
        </div>

        {/* Story Timeline */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {storyChapters.map((chapter, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline line */}
                {index < storyChapters.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-romantic-rose to-romantic-pink opacity-30"></div>
                )}
                
                <div className="flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-romantic-rose to-romantic-deepRose rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">♥</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 romantic-card hover:scale-[1.02] transition-transform duration-300">
                    <div className="mb-4">
                      <span className="font-poppins text-sm text-romantic-rose bg-romantic-pink px-3 py-1 rounded-full">
                        {chapter.date}
                      </span>
                    </div>
                    <h3 className="font-dancing text-3xl text-romantic-deepRose mb-4">
                      {chapter.title}
                    </h3>
                    <p className="font-poppins text-gray-600 leading-relaxed">
                      {chapter.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="container mx-auto px-4 mt-16">
          <div className="romantic-card text-center max-w-4xl mx-auto">
            <h2 className="font-vibes text-4xl text-romantic-deepRose mb-6">
              To Be Continued...
            </h2>
            <p className="font-dancing text-xl text-romantic-rose leading-relaxed">
              Our story is still being written, and every day adds new beautiful pages. 
              I love you more with each chapter, and I can't wait to see what our future holds. 
              Here's to our forever love story. ✨
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <SecretHeartButton />
    </div>
  );
};

export default OurStory;
