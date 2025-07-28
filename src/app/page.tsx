"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import  Roads from '@/components/roads';


// function ShoppingMall(props){
//   const {scene} = useGLTF('assets/models/shop_mall.glb');
//   return <primitive object={scene} {...props} />;
// }


export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight intensity={1.1}/>
        <directionalLight position={[10, 10, 5]} intensity={0.7}/>
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Roads />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

//optional for preload performance
// useGLTF.preload('/public/assets/models/ethad_stadium.glb');
useGLTF.preload('/public/assets/models/shop_mall.glb');
// useGLTF.preload('/public/assets/models/sydney_opera_house.glb');
