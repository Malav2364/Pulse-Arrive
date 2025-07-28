import React from 'react';

const Roads: React.FC = () => {
  return (
    <>
      {/* LONG CROSS ROAD - horizontal (wider) */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.09, 0]}>
        <planeGeometry args={[500, 24]} />
        <meshStandardMaterial color="#232328" />
      </mesh>

      {/* LONG CROSS ROAD - vertical (wider) */}
      <mesh
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -0.08, 0]}>
        <planeGeometry args={[500, 24]} />
        <meshStandardMaterial color="#232328" />
      </mesh>

      {/* Center divider for horizontal road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]}>
        <planeGeometry args={[500, 0.3]} />
        <meshStandardMaterial color="#ffdc00" />
      </mesh>

      {/* Lane dividers for horizontal road - left side lanes */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 6]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, -6]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Outer edge lines for horizontal road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 12]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, -12]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Center divider for vertical road */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -0.06, 0]}>
        <planeGeometry args={[500, 0.3]} />
        <meshStandardMaterial color="#ffdc00" />
      </mesh>

      {/* Lane dividers for vertical road */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[6, -0.06, 0]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[-6, -0.06, 0]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Outer edge lines for vertical road */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[12, -0.06, 0]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[-12, -0.06, 0]}>
        <planeGeometry args={[500, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  )
};

export default Roads;
