
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const FutureDreams = () => {
  const dreams = [
    {
      icon: "🏡",
      title: "Nossa Casa dos Sonhos",
      description: "Um lugar aconchegante onde podemos construir nossa vida juntos, aquelas casas UUUUUUUuuuuu UUUUUUUU sabe mo."
    },
    {
      icon: "✈️",
      title: "Aventuras Pelo Mundo",
      description: "Explorando novos países, vivenciando culturas diferentes e criando memórias inesquecíveis juntos. Todo destino é melhor quando você está ao meu lado."
    },
    {
      icon: "👶",
      title: "Aumentando Nossa Família",
      description: "Imaginando uma eleonora uma luiza correndo pela casa hehehehe, e a gente se olhando e ficando emocionados."
    },
    {
      icon: "💍",
      title: "Para Sempre Juntos",
      description: "Tornando nosso amor oficial e prometendo nos amar através de todas as coisas que vamos viver. Mal posso esperar para te chamar de minha esposa linda perfeita maravilhosa."
    },
    {
      icon: "🎓",
      title: "Apoiando os Sonhos Um do Outro",
      description: "Torcendo um pelo outro enquanto perseguimos nossos objetivos e sonhos individuais, sempre sempre eu vou torcer por voce e ser seu maior apoio monene."
    },
    {
      icon: "🌅",
      title: "Envelhecendo Juntos",
      description: "Sentados na nossa varanda quando estivermos velhinhos e cabelo branquin, ainda de mãos dadas, ainda rindo juntos, e ainda tão apaixonados quanto estamos hoje - talvez até mais(muito mais)."
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
             Prometo te amar em cada estação da nossa vida — nos dias de sol e nas tempestades inesperadas.
            Prometo estar ao seu lado não só nos sonhos grandes, mas também nas pequenas alegrias do dia a dia.
            Apoiar teus planos como se fossem meus, sorrir com tuas vitórias e te acolher em cada incerteza.
            Prometo segurar tua mão firme quando o mundo parecer balançar, e também quando estivermos rindo à toa sem motivo.
            Te olhar com o mesmo encanto hoje, amanhã e nos próximos mil cafés da manhã.
            Prometo cuidar da nossa Hana, mesmo quando ela teimar em dormir nos lugares mais aleatórios,
            e fazer do nosso lar um lugar cheio de amor — quem sabe até com nossa pequena Eleonora correndo pelos cantos.
            Sei que juntos podemos construir uma história linda, daquelas que dão vontade de viver mil vezes.
            Porque contigo, Luana, o amor é mais leve, a vida é mais bonita — e o futuro, infinitamente mais nosso.
            
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
