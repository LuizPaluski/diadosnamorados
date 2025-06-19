// src/pages/Journey3D.tsx

import Navigation from '@/components/Navigation';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Scene = () => {
  return (
    <>
      {/* Adicionaremos a iluminação, câmera e objetos aqui depois */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ambientLight intensity={0.5} />
    </>
  );
};

const Journey3DPage = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Navigation />
      <Canvas>
        <Scene />
      </Canvas>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-garamond text-center p-4 bg-black/50 rounded-lg">
        <p className="text-xl">Nossa Jornada</p>
        <p className="text-sm opacity-80">Use o mouse para explorar as memórias</p>
      </div>
    </div>
  );
};

export default Journey3DPage;