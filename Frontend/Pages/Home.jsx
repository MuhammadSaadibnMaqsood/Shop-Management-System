import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Texture from "../src/hooks/Texture";

const Home = () => {
  return (
    <div className="absolute top-0 bg-black h-[100vh] w-full text-white pt-28 md:pt-20">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center text-5xl sm:text-6xl md:text-6xl tekturFont font-bold tracking-widest relative"
      >
        MS SHOPS
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute left-0 right-0 top-full text-5xl sm:text-6xl md:text-6xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
        >
          MS SHOPS
        </motion.span>
      </motion.h1>

      <div className="pt-16 h-[70vh]">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <Texture />
        
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
