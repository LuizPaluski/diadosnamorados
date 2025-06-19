// src/components/CountdownTimer.tsx

import { useState, useEffect } from 'react';
import { CalendarHeart } from 'lucide-react';

// --- CONFIGURAÇÃO ---
// Altere esta data para a data especial de vocês!
// Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
// Exemplo para 21 de Outubro de 2025: new Date(2025, 9, 21, 0, 0, 0)
const TARGET_DATE = new Date(2025, 9, 21, 0, 0, 0);

const calculateTimeLeft = () => {
  const difference = +TARGET_DATE - +new Date();
  let timeLeft = {
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  };

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0');
    return (
      <div key={interval} className="text-center">
        <span className="font-lato text-4xl md:text-5xl font-bold text-romantic-deepRose tracking-wider">{value}</span>
        <span className="block font-garamond text-sm text-romantic-rose capitalize">{interval}</span>
      </div>
    );
  });

  // Verifica se o tempo já esgotou
  const isTimeUp = !Object.values(timeLeft).some(val => val > 0);

  return (
    <div className="w-full max-w-2xl mx-auto my-12 animate-fade-in">
      <div className="romantic-card p-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CalendarHeart className="h-6 w-6 text-romantic-rose" />
          <h2 className="font-garamond text-2xl text-center text-romantic-deepRose">
            {isTimeUp ? "Chegou o nosso dia especial!" : "Contagem para o nosso dia especial"}
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {isTimeUp ? (
             <div className="col-span-4 text-center font-parisienne text-4xl text-romantic-gold py-4">Feliz dia!</div>
          ) : (
            timerComponents
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;