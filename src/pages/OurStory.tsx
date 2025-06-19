
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const OurStory = () => {
  const storyChapters = [
    {
      title: "O Primeiro Olhar",
      date: "Capítulo 1",
      content: "Foi um momento que mudou tudo. Quando nossos olhos se encontraram pela primeira vez, o tempo pareceu parar. Eu soube naquele instante que minha vida nunca mais seria a mesma. Havia algo mágico naquele primeiro olhar - uma faísca que cresceria na mais linda história de amor."
    },
    {
      title: "Conhecendo Você",
      date: "Capítulo 2", 
      content: "Cada conversa revelava outra camada da sua alma linda. Sua risada se tornou meu som favorito, seus pensamentos cativaram minha mente, e seus sonhos se tornaram sonhos que eu queria ajudar a realizar. Me vi me apaixonando mais profundamente a cada palavra que compartilhávamos."
    },
    {
      title: "Nosso Primeiro Encontro",
      date: "Capítulo 3",
      content: "Nervosismo e empolgação preenchiam o ar enquanto embarcávamos em nosso primeiro encontro oficial. Cada momento foi perfeito - a maneira como você sorriu, as histórias que compartilhamos, os silêncios confortáveis. Eu soube naquela noite que queria passar cada dia te conhecendo melhor."
    },
    {
      title: "Me Apaixonando",
      date: "Capítulo 4",
      content: "Aconteceu gradualmente, então de uma vez só. O amor se infiltrou no meu coração e fez dele sua casa. Sua bondade, sua beleza por dentro e por fora, sua maneira de tornar tudo melhor - me vi completa e totalmente apaixonado por cada parte de você."
    },
    {
      title: "Nossas Aventuras",
      date: "Capítulo 5",
      content: "Juntos exploramos novos lugares, experimentamos coisas novas e criamos memórias que durarão para sempre. Cada aventura contigo é minha aventura favorita. Seja viajando pelo mundo ou apenas aconchegados em casa, cada momento é uma aventura quando estou com você."
    },
    {
      title: "Construindo Nossa Vida",
      date: "Capítulo 6",
      content: "Dia após dia, construímos algo lindo juntos. Nossas piadas internas, nossas tradições, nossos sonhos para o futuro - criamos um amor que parece um lar. Você se tornou não apenas minha parceira, mas minha melhor amiga e meu maior amor."
    },
    {
      title: "Para Sempre e Sempre",
      date: "Capítulo ∞",
      content: "Este é apenas o começo da nossa história. Todos os dias acordo grato por te chamar de minha e empolgado para escrever novos capítulos juntos. Nossa história de amor é minha história favorita, e mal posso esperar para ver que aventuras lindas nos aguardam nos capítulos que ainda estão por vir."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-6">
            Nossa História de Amor
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-3xl mx-auto">
            Uma linda jornada de dois corações encontrando o caminho um para o outro e criando algo mágico juntos
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
              Continua...
            </h2>
            <p className="font-dancing text-xl text-romantic-rose leading-relaxed">
              Nossa história ainda está sendo escrita, e cada dia adiciona novas páginas lindas. 
              Eu te amo mais a cada capítulo, e mal posso esperar para ver o que nosso futuro reserva. 
              Aqui está para nossa história de amor eterna. ✨
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
