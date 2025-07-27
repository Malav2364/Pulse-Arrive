"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Stadium(props){
  const {scene} = useGLTF('assets/models/etihad_stadium.glb');
  return <primitive object={scene} {...props} />;
}
function ShoppingMall(props){
  const {scene} = useGLTF('assets/models/shop_mall.glb');
  return <primitive object={scene} {...props} />;
}
function OperaHouse(props){
  const {scene} = useGLTF('assets/models/sydney_opera_house.glb');
  return <primitive object={scene} {...props} />;
}

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight intensity={1.1}/>
        <directionalLight position={[10, 10, 5]} intensity={0.7}/>
        <Stadium scale={[0.02, 0.02, 0.02]} position={[2, 0, 7]}/>
        <ShoppingMall scale={[0.2, 0.2, 0.2]} position={[1, 0, 9]}/>
        <OperaHouse scale={[0.2, 0.2, 0.2]} position={[7, 0, 2]}/>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

//optional for preload performance
useGLTF.preload('/public/assets/models/ethad_stadium.glb');
useGLTF.preload('/public/assets/models/shop_mall.glb');
useGLTF.preload('/public/assets/models/sydney_opera_house.glb');
