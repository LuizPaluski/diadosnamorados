// src/pages/QuizPage.tsx

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { HelpCircle, Sparkles, Gift, Repeat } from 'lucide-react';

// --- PERGUNTAS E RESPOSTAS DO QUIZ ---
// Personalize as perguntas, opções e a resposta correta aqui!
const quizQuestions = [
  {
    question: "Qual foi o local do nosso primeiro encontro 'oficial'?",
    answers: ["No cinema", "Na sua casa (para o macarrão!)", "No parque", "Na casa de um amigo"],
    correctAnswer: "Na sua casa (para o macarrão!)"
  },
  {
    question: "Qual é a minha mania mais engraçada que você adora imitar?",
    answers: ["Falar com os gatos", "Cantarolar enquanto cozinho", "Dançar do nada", "Fazer caretas"],
    correctAnswer: "Falar com os gatos"
  },
  {
    question: "Qual o nome da primeira série que maratonamos juntos?",
    answers: ["Friends", "The Office", "Game of Thrones", "Euphoria"],
    correctAnswer: "Euphoria"
  },
  {
    question: "Qual é a sua 'linguagem do amor' favorita que eu demonstro?",
    answers: ["Presentes", "Tempo de qualidade", "Palavras de afirmação", "Toque físico"],
    correctAnswer: "Toque físico"
  },
  {
    question: "Se a nossa história fosse um filme, qual seria o gênero?",
    answers: ["Comédia Romântica", "Aventura", "Drama", "Fantasia"],
    correctAnswer: "Comédia Romântica"
  }
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return; // Impede múltiplas respostas

    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1500); // Espera 1.5s antes de ir para a próxima pergunta
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-24 flex items-center justify-center animate-fade-in">
          <div className="text-center max-w-lg mx-auto">
            <div className="romantic-card p-8">
              <Gift className="h-16 w-16 mx-auto text-romantic-gold mb-4" />
              <h1 className="font-garamond text-3xl text-romantic-deepRose mb-4">Quiz Finalizado!</h1>
              <p className="font-lato text-lg text-gray-700 mb-6">
                Você acertou <strong className="text-romantic-deepRose">{score}</strong> de <strong className="text-romantic-deepRose">{quizQuestions.length}</strong> perguntas!
              </p>
              <p className="font-garamond text-xl text-romantic-rose mb-8">
                Mas a verdade é que não importa a pontuação. O que importa é que cada resposta é uma parte da nossa história linda. Você já ganhou o prêmio mais importante: meu coração. ❤️
              </p>
              <button onClick={restartQuiz} className="love-button flex items-center justify-center mx-auto gap-2">
                <Repeat className="h-4 w-4" />
                Jogar Novamente
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24 flex items-center justify-center animate-fade-in">
        <div className="text-center max-w-lg mx-auto">
          <div className="romantic-card p-8">
            <HelpCircle className="h-12 w-12 mx-auto text-romantic-rose mb-4" />
            <div className="mb-8">
              <p className="font-lato text-sm text-gray-500 mb-2">Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}</p>
              <h2 className="font-garamond text-2xl text-romantic-deepRose">
                {quizQuestions[currentQuestionIndex].question}
              </h2>
            </div>
            <div className="space-y-4">
              {quizQuestions[currentQuestionIndex].answers.map((answer, index) => {
                const isCorrect = answer === quizQuestions[currentQuestionIndex].correctAnswer;
                const isSelected = selectedAnswer === answer;
                
                let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-300 font-medium font-lato ';
                if (selectedAnswer) {
                  if (isCorrect) {
                    buttonClass += 'bg-green-100 border-green-400 text-green-800 scale-105';
                  } else if (isSelected) {
                    buttonClass += 'bg-red-100 border-red-400 text-red-800';
                  } else {
                     buttonClass += 'bg-gray-100 border-gray-300 text-gray-500 opacity-70';
                  }
                } else {
                  buttonClass += 'bg-white border-romantic-pink hover:bg-romantic-blush';
                }

                return (
                  <button key={index} onClick={() => handleAnswerClick(answer)} disabled={!!selectedAnswer} className={buttonClass}>
                    {answer}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;