import React, { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Texture = () => {
  const tex = useTexture("./heroimg.jpeg");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <mesh ref={cyl} rotation={[0, 1.4, 0.2]}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Texture;
