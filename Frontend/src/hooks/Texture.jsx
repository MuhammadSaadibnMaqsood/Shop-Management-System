import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const Texture = () => {
  const tex = useTexture(
    "https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png"
  );

  return (
    <mesh>
      <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
      <meshStandardMaterial 
        map={tex} 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
};

export default Texture;
