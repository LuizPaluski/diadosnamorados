// src/pages/Journey3D.tsx
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Text } from '@react-three/drei';
import { MemoryStation } from '@/components/MemoryStation';
import { Rose } from '@/components/Rose';
import { MemoryCard } from '@/components/MemoryCard';
import Navigation from '@/components/Navigation';

const memories = [
  {
    id: 'first-look',
    title: "O Primeiro Olhar",
    position: [0, 0, 0] as [number, number, number],
    content: "Foi a primeira vez que eu tive certeza só de olhar que você seria a princesa que eu ia querer ter todos os dias ao meu lado..."
  },
  // Adicionaremos mais memórias aqui depois...
];

const Scene = () => {
  const [activeMemory, setActiveMemory] = useState<any>(null);

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={100} />
      <Stars radius={150} depth={50} count={7000} factor={6} saturation={0} fade />

      {/* Título flutuante */}
      <Text color="white" anchorX="center" position={[0, 3, -5]} fontSize={0.6} font="/fonts/Parisienne-Regular.ttf">
        A Jornada do Nosso Amor
      </Text>

      {/* Estações de Memória */}
      {memories.map(mem => (
        <MemoryStation
          key={mem.id}
          position={mem.position}
          title={mem.title}
          onClick={() => setActiveMemory(mem)}
        >
          {/* Adicionaremos objetos diferentes aqui depois */}
          <Rose />
        </MemoryStation>
      ))}
      
      {/* Controles da câmera para navegar */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 1.5}
      />

      {/* Card da memória ativa */}
      {activeMemory && (
        <MemoryCard 
          title={activeMemory.title}
          text={activeMemory.content}
          onClose={() => setActiveMemory(null)}
        />
      )}
    </>
  );
};

const Journey3DPage = () => {
  return (
    <div className="w-full h-screen bg-black relative">
      <Navigation />
      {/* Suspense é um "loader" para conteúdo 3D */}
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-black text-white">Carregando nosso universo...</div>}>
        <Canvas camera={{ position: [0, 1, 8], fov: 60 }}>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Journey3DPage;