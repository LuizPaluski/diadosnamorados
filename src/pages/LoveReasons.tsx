
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';
import { Heart } from 'lucide-react';

const LoveReasons = () => {
const reasons = [
  {
    title: "Teu Sorriso",
    description: "Teu sorriso, Monene, é como sol em manhã fria. Ele ilumina tudo dentro de mim e é a lembrança mais linda que carrego ao acordar e ao dormir."
  },
  {
    title: "Teu Coração",
    description: "Luana, teu coração é um lar cheio de carinho. A forma como cuida dos outros me mostra todos os dias o privilégio que é te amar."
  },
  {
    title: "Tua Risada",
    description: "Tua risada é como um campo de girassóis dançando ao vento — leve, feliz, contagiante. Me faz sorrir mesmo nos dias nublados."
  },
  {
    title: "Tua Inteligência Brilhante",
    description: "Luana, tua mente brilha com uma luz única. O jeito que você enxerga o mundo, com tanta sabedoria e sensibilidade, me encanta profundamente."
  },
  {
    title: "Seus sonhos",
    description: "Teus sonhos, Monene, são como estrelas no meu céu. Ver você lutando por eles me dá um orgulho imenso e me faz querer ser teu apoio sempre."
  },
  {
    title: "Teu Toque, Meu Porto Seguro",
    description: "Quando Girassol me toca, o mundo fica em silêncio. Teus abraços, teus carinhos... cada gesto teu é um abrigo onde eu sempre quero estar."
  },
  {
    title: "Tua Força, Luana",
    description: "Luana, você enfrenta tudo com uma coragem linda. Mesmo quando o mundo pesa, você segue firme — e isso me inspira demais."
  },
  {
    title: "Amor Pela Vida",
    description: "Monene, você transforma momentos simples em lembranças eternas. Tua alegria me ensina a ver beleza até nos detalhes mais pequenos."
  },
  {
    title: "O Jeito Como Você Me Ama",
    description: "Girassol, você me ama com uma verdade rara, abraçando cada parte de quem eu sou. Ao teu lado, me sinto inteiro — e profundamente amado."
  },
  {
    title: "você me entende até no silêncio",
    description: "Mesmo sem palavras, você sabe o que eu sinto. E isso é raro."
  },
  {
    title: "Porque te amar é a coisa mais natural e verdadeira que já senti.",
    description: "É como respirar. Simples assim: eu te amo.",
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
              meu girassol. Obrigado por ser a mulher incrível do mundo e por escolher compartilhar sua vida comigo. 
              Eu te amo mais do que cafe serio mo muito mais. ❤️
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
