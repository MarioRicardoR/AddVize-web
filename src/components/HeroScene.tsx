import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const cityLightsRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (earthRef.current && atmosphereRef.current && cityLightsRef.current) {
      const rotationSpeed = 0.05;
      earthRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
      cityLightsRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
    }
  });

  return (
    <group position={[0, 0, -15]}>
      {/* Core Earth sphere */}
      <Sphere ref={earthRef} args={[8, 64, 64]}>
        <meshPhongMaterial
          color="#1a237e"
          emissive="#1a237e"
          emissiveIntensity={0.2}
          specular={new THREE.Color('#ffffff')}
          shininess={5}
        />
      </Sphere>
      
      {/* City lights layer */}
      <Sphere ref={cityLightsRef} args={[8.01, 64, 64]}>
        <meshPhongMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          wireframe
          wireframeLinewidth={2}
        />
      </Sphere>
      
      {/* Cloud layer */}
      <Sphere args={[8.02, 64, 64]}>
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere ref={atmosphereRef} args={[8.2, 32, 32]}>
        <meshPhongMaterial
          color="#4169e1"
          emissive="#4169e1"
          emissiveIntensity={0.3}
          transparent
          opacity={0.2}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      
      {/* Outer atmosphere rim */}
      <Sphere args={[8.4, 32, 32]}>
        <meshPhongMaterial
          color="#87ceeb"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

function AISphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <motion.group
      animate={{
        y: [0, 0.5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      position={[2, 0, 0]}
    >
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={1}>
        <meshStandardMaterial
          color="#BBA14F"
          roughness={0.2}
          metalness={0.8}
          emissive="#BBA14F"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </motion.group>
  );
}

function Scene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.2} />
      <pointLight position={[100, 10, -50]} intensity={1.5} />
      <pointLight position={[-100, -10, -50]} intensity={1} color="#ffd700" />
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Earth />
      <AISphere />
      <fog attach="fog" args={['#000000', 30, 40]} />
    </Suspense>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}