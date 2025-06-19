import { useState, useRef, useEffect } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = "/caju.mp3";

  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      audioRef.current.muted = true; 

  
      audioRef.current.play().catch(error => {
        console.log("Autoplay foi bloqueado. O usuário precisa interagir para iniciar.", error);
      
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      const newIsPlaying = !isPlaying;
      if (newIsPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(newIsPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newIsMuted = !isMuted;
      audioRef.current.muted = newIsMuted;
      setIsMuted(newIsMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-romantic-rose/20 p-3 flex items-center space-x-2">
        {}
        <audio
          ref={audioRef}
          src={musicUrl}
          autoPlay 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-gradient-to-r from-romantic-rose to-romantic-deepRose text-white hover:scale-110 transition-transform duration-200"
          title={isPlaying ? 'Pausar música' : 'Tocar música'}
        >
          {isPlaying ? (
            <Music2 className="h-4 w-4" />
          ) : (
            <Music className="h-4 w-4" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="p-1 text-romantic-rose hover:text-romantic-deepRose transition-colors duration-200"
          title={isMuted ? 'Ativar som' : 'Silenciar'}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>

        {isPlaying && (
          <div className="flex items-center space-x-1">
            <div className="w-1 h-3 bg-romantic-rose rounded-full animate-pulse"></div>
            <div className="w-1 h-2 bg-romantic-rose rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-4 bg-romantic-rose rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;