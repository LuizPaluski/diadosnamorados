// src/pages/Letters.tsx

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LetterCard from '@/components/LetterCard';
import { BookHeart } from 'lucide-react';

const LettersPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-24 animate-fade-in">
        <div className="text-center mb-12">
          <BookHeart className="h-16 w-16 mx-auto text-romantic-rose mb-4" />
          <h1 className="font-parisienne text-5xl md:text-7xl text-romantic-deepRose">
            Abra Quando...
          </h1>
          <p className="font-garamond text-xl text-romantic-rose mt-2">
            Um envelope para cada momento. Um pedacinho do meu coração para você.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <LetterCard title="Abra quando sentir saudades de mim...">
            <p>
              Meu amor, se você está lendo isso, é porque um pouquinho de saudade apertou aí, né?
              Fecha os olhos por um segundo e lembra do meu abraço, do meu cheiro e da minha voz dizendo o quanto eu te amo.
              A distância pode ser chata, mas ela nunca vai ser maior que o nosso amor. Logo, logo estaremos juntos.
              Te amo infinitamente!
            </p>
          </LetterCard>

          <LetterCard title="Abra quando tiver um dia difícil...">
            <p>
              Ei, minha guerreira. Sei que alguns dias são mais difíceis que outros.
              Mas quero que você saiba que você é a pessoa mais forte e incrível que eu conheço.
              Tudo isso vai passar, e eu estou aqui, do seu lado, para o que der e vier.
              Você é maior que qualquer problema. Respire fundo. Estou te enviando toda a minha energia e carinho.
            </p>
          </LetterCard>

          <LetterCard title="Abra quando duvidar do quanto é especial...">
            <p>
              Nunca, em hipótese alguma, duvide do seu valor. Você ilumina tudo por onde passa.
              Você é inteligente, linda, engraçada, e tem um coração gigante.
              Você me faz uma pessoa melhor todos os dias. Para mim, você não é só especial, você é o meu universo inteiro.
            </p>
          </LetterCard>
          
          <LetterCard title="Abra para lembrar do nosso primeiro beijo...">
            <p>
              Lembra daquele dia na festa? A ansiedade, o frio na barriga hihi... e então, tudo parou.
              Foi o beijo mais perfeito do mundo, porque foi o nosso. Foi o começo de tudo.
              Até hoje, cada beijo seu tem o mesmo poder de me fazer flutuar.
              Obrigado por aquele momento e por todos os que vieram depois.
            </p>
          </LetterCard>

          <LetterCard title="Abra quando quiser uma dose de risada...">
            <p>
              Oi, amor! Pensa no dia que eu falei batata ao invez de cenoura(eu acho). Lembrou?
              Agora lembra daquela vez que a gente riu tanto que a barriga doeu.
              Seu sorriso é a minha coisa favorita no mundo, então espero que essa lembrança tenha feito você sorrir agora.
              Te amo, sua boba! :)
            </p>
          </LetterCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LettersPage;