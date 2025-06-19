
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SecretHeartButton from '@/components/SecretHeartButton';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Fotos reais do casal
  const photos = [
    {
      src: "/lovable-uploads/87d0e609-068a-432d-a457-ebb98a7806b2.png",
      caption: "Nossa primeira foto juntos"
    },
    {
      src: "/lovable-uploads/39cef09c-11af-40c4-bd65-968b13bbfa9a.png",
      caption: "Seu primeiro aniversario ao meu lado monene"
    },
    {
      src: "/lovable-uploads/c3cdc0c1-f49b-4845-bea1-8f5e4609801b.png",
      caption: "NOSSA PRIMEIRA FESTINHA JUNINA MONENE"
    },
    {
      src: "/lovable-uploads/ce1c29a4-4628-47f6-83c0-d0b5cafd4210.png",
      caption: "Olhares apaixonados que dizem tudo sem precisar de palavras"
    },
    {
      src: "/lovable-uploads/7320e5bc-cacb-4ca6-80d8-9308bc1647b6.png",
      caption: "Sendo romatincos ate quando estamos de mascara"
    },
    {
      src: "/lovable-uploads/16e637fd-c23e-49c0-ac2a-ef4ea6899519.png",
      caption: "Nossa primeira viagem entre amigos"
    },
    {
      src: "/lovable-uploads/cc46d6e8-e8b0-4606-b64c-7bd14230de7d.png",
      caption: "Lugares bonitos com a minha princesa(eu amei esse dia)"
    },
    {
      src: "/lovable-uploads/a9c67f05-fd3d-4774-b45a-fb159039b37f.png",
      caption: "Seu sorriso é a coisa mais linda que existe no mundo(voce sabe que eu sou apaixonado nessa foto)"
    },
    {
      src: "/lovable-uploads/6da6edd4-5292-4575-8e40-05612ff5d8cb.png",
      caption: "Momentos mais legais da minha vida foi com voce e esta sendo com voce"
    }
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
            Cada foto captura um momento do nosso amor e da nossa historia.
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
