
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const FutureDreams = () => {
  const dreams = [
    {
      icon: "🏡",
      title: "Nossa Casa dos Sonhos",
      description: "Um lugar aconchegante onde podemos construir nossa vida juntos, cheio de risadas, amor e todas as nossas memórias favoritas. Talvez um jardim onde possamos assistir ao pôr do sol juntos."
    },
    {
      icon: "✈️",
      title: "Aventuras Pelo Mundo",
      description: "Explorando novos países, vivenciando culturas diferentes e criando memórias inesquecíveis juntos. Todo destino é melhor quando você está ao meu lado."
    },
    {
      icon: "👶",
      title: "Aumentando Nossa Família",
      description: "Imaginando pequenas versões nossas correndo por aí, ensinando-as sobre amor, bondade e todas as coisas lindas da vida. Você será a mãe mais incrível."
    },
    {
      icon: "💍",
      title: "Para Sempre Juntos",
      description: "Tornando nosso amor oficial e prometendo nos amar através de todas as aventuras da vida. Mal posso esperar para te chamar de minha esposa e passar a eternidade contigo."
    },
    {
      icon: "🎓",
      title: "Apoiando os Sonhos Um do Outro",
      description: "Torcendo um pelo outro enquanto perseguimos nossos objetivos e sonhos individuais, sempre sendo o maior apoio um do outro e celebrando cada sucesso juntos."
    },
    {
      icon: "🌅",
      title: "Envelhecendo Juntos",
      description: "Sentados na nossa varanda quando estivermos velhos e grisalhos, ainda de mãos dadas, ainda rindo juntos, e ainda tão apaixonados quanto estamos hoje - talvez até mais."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-6">
            Nossos Sonhos Futuros
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-3xl mx-auto mb-8">
            Juntos sonhamos com um futuro lindo cheio de amor, aventura e possibilidades infinitas. 
            Aqui estão os sonhos que meu coração guarda para nós.
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
              Minha Promessa para Você
            </h2>
            <p className="font-dancing text-xl text-romantic-rose leading-relaxed mb-6">
              Prometo te amar através de cada estação da vida, apoiar seus sonhos como se fossem meus, 
              segurar sua mão através de cada desafio, e celebrar cada alegria contigo. 
              Juntos, podemos tornar todos os nossos sonhos realidade.
            </p>
            <div className="flex justify-center items-center gap-4 text-2xl">
              <span>💕</span>
              <span className="font-poppins text-romantic-deepRose">Para Sempre Seu</span>
              <span>💕</span>
            </div>
          </div>
        </div>

        {/* Vision Board Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="text-center mb-8">
            <h2 className="font-dancing text-3xl text-romantic-deepRose mb-4">
              Nossa Visão dos Sonhos
            </h2>
            <p className="font-poppins text-gray-600">
              Todo sonho começa com uma visão, e a nossa é pintada com amor
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
