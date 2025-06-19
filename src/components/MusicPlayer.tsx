
import { useState, useRef, useEffect } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // URL de uma música romântica de domínio público
  const musicUrl = "file:///C:/Users/luizg/Downloads/caju.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volume baixo para não incomodar
      audioRef.current.loop = true; // Repetir a música
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Navegadores modernos bloqueiam autoplay, então só toca após interação do usuário
          console.log('Autoplay bloqueado pelo navegador');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-romantic-rose/20 p-3 flex items-center space-x-2">
        <audio
          ref={audioRef}
          src={musicUrl}
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
