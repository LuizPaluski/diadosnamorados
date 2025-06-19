// src/components/MemoryCard.tsx
import { X } from 'lucide-react';

interface MemoryCardProps {
  title: string;
  text: string;
  onClose: () => void;
}

export function MemoryCard({ title, text, onClose }: MemoryCardProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center animate-fade-in z-50">
      <div className="romantic-card max-w-lg w-11/12 relative text-left">
        <button onClick={onClose} className="absolute top-4 right-4 text-romantic-rose hover:text-romantic-deepRose">
          <X size={24} />
        </button>
        <h2 className="font-garamond text-3xl text-romantic-deepRose mb-4">{title}</h2>
        <p className="font-lato text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}