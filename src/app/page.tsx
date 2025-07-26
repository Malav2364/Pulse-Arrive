"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight/>
          <mesh>
            <boxGeometry/>
            <meshStandardMaterial color="orange" />
          </mesh>
          <OrbitControls/>
      </Canvas>
    </div>
  );
}
