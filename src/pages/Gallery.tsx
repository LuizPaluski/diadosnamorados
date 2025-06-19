
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample photos - replace with your actual photos
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      caption: "Nosso primeiro encontro - o começo do para sempre"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
      caption: "Dançando sob as estrelas"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      caption: "Aventura juntos nas montanhas"
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      caption: "Assistindo o pôr do sol de mãos dadas"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      caption: "Momentos aconchegantes em casa"
    },
    {
      src: "https://imagekit.io/public/share/phimtncbt/cd14919363c058b34da2d6a35f8dfaeb797bd12c77df1324eb22231aacabfd6a1760a31b35d80a9b1df0e278b543c52d93091eed4a6d48cee7419e460c3e62acedbcf1168059451e794449db9daffdb9",
      caption: "Até nossos pets amam nossa história de amor"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="font-vibes text-5xl md:text-7xl text-romantic-deepRose mb-4">
            Nossas Lindas Memórias
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-romantic-rose max-w-2xl mx-auto">
            Cada foto captura um momento da nossa história de amor, um tesouro para guardar para sempre
          </p>
        </div>

        {/* Photo Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-poppins text-white text-sm font-medium">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].caption}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-dancing text-white text-xl bg-black/50 rounded-full px-6 py-2 inline-block">
                  {photos[selectedImage].caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <SecretHeartButton />
    </div>
  );
};

export default Gallery;
