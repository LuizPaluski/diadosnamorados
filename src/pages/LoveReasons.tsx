
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';
import { Heart } from 'lucide-react';

const LoveReasons = () => {
  const reasons = [
    {
      title: "Seu Sorriso Incrível",
      description: "Seu sorriso ilumina todo o meu mundo e deixa cada dia mais brilhante. É a primeira coisa que penso quando acordo e a última que vejo antes de dormir."
    },
    {
      title: "Seu Coração Bondoso",
      description: "A maneira como você cuida dos outros e mostra compaixão por todos ao seu redor me faz me apaixonar mais por você a cada dia."
    },
    {
      title: "Sua Risada Contagiante",
      description: "Sua risada é música para meus ouvidos. Ela enche nossa casa de alegria e me lembra que a vida deve ser celebrada ao seu lado."
    },
    {
      title: "Sua Inteligência",
      description: "Sua mente brilhante me impressiona constantemente. A forma como você pensa, resolve problemas e vê o mundo me inspira a ser melhor."
    },
    {
      title: "Seus Sonhos",
      description: "Amo como você é apaixonada por seus objetivos e sonhos. Te apoiar e ver você brilhar me traz uma felicidade incrível."
    },
    {
      title: "Seu Toque Carinhoso",
      description: "A forma como você segura minha mão, dá os melhores abraços e me faz sentir seguro e amado apenas com seu toque é mágica."
    },
    {
      title: "Sua Força",
      description: "Você enfrenta desafios com tanta graça e determinação. Sua força me inspira e me deixa orgulhoso de estar ao seu lado."
    },
    {
      title: "Seu Amor pela Vida",
      description: "Você encontra alegria nos menores momentos e me ensina a valorizar cada bênção que temos juntos."
    },
    {
      title: "Como Você Me Ama",
      description: "Você me ama completamente, com defeitos e tudo. Você me faz sentir merecedor, querido e como a pessoa mais sortuda do mundo."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-6">
            Por Que Te Amo
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-3xl mx-auto mb-8">
            Existem milhares de razões pelas quais você é o amor da minha vida. Aqui estão algumas que fazem meu coração transbordar de amor por você todos os dias.
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
              E Muito Mais...
            </h2>
            <p className="font-dancing text-xl text-romantic-rose leading-relaxed">
              Todos os dias contigo, eu descubro novas razões para te amar. Você é meu coração, minha alma, 
              meu tudo. Obrigado por ser a mulher incrível que você é e por escolher compartilhar sua vida linda comigo. 
              Eu te amo mais do que palavras poderiam expressar. ❤️
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
