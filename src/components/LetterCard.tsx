// src/components/LetterCard.tsx

import { useState } from 'react';
import { Mail, MailOpen, ChevronsUpDown } from 'lucide-react';

interface LetterCardProps {
  title: string;
  children: React.ReactNode;
}

const LetterCard = ({ title, children }: LetterCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-romantic-rose/30 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg transition-all duration-500 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div className="flex items-center gap-4">
          {isOpen ? (
            <MailOpen className="h-8 w-8 text-romantic-deepRose" />
          ) : (
            <Mail className="h-8 w-8 text-romantic-rose" />
          )}
          <h3 className="font-garamond text-xl text-romantic-deepRose font-semibold">
            {title}
          </h3>
        </div>
        <ChevronsUpDown
          className={`h-6 w-6 text-romantic-rose transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-romantic-rose/20">
          <div className="font-lato text-gray-700 leading-relaxed italic">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterCard;