// src/components/MemoryStation.tsx
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useCursor } from '@react-three/drei';
import * as THREE from 'three';

interface MemoryStationProps {
  position: [number, number, number];
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function MemoryStation({ position, title, onClick, children }: MemoryStationProps) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  useFrame((state) => {
    // Faz o objeto flutuar suavemente
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.1;
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        visible={hovered}
      >
        {title}
      </Text>
    </group>
  );
}