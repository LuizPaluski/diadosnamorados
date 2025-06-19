// src/components/Rose.tsx
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

// Carregando um modelo 3D gratuito de uma rosa.
// O useGLTF faz o download e prepara o modelo para nós.
export function Rose(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rose/model.gltf') as any;
  
  // Ajustando materiais para ficarem mais bonitos
  materials.Red.color = new THREE.Color('#990000'); // Vermelho mais escuro
  materials.Red.roughness = 0.5;
  materials.Green.color = new THREE.Color('#004400'); // Verde mais escuro
  materials.Green.roughness = 0.5;

  return (
    <group {...props} dispose={null} scale={0.015} rotation={[0.5, 0, 0]}>
      <mesh geometry={nodes.Flower.geometry} material={materials.Red} />
      <mesh geometry={nodes.Stem.geometry} material={materials.Green} />
    </group>
  )
}

// Isso "pré-carrega" o modelo, para que ele apareça mais rápido.
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rose/model.gltf')