import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import Texture from "../hooks/Texture";

const Hero = () => {
  return (
    <div id="hero" className="relative z-20  bg-black h-[90vh] w-full text-white pt-28 md:pt-10">
      {/* Title */}
      <motion.h1
     
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center text-5xl sm:text-6xl md:text-9xl AsimovianFont font-bold tracking-widest relative"
      >
        AURA
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute AsimovianFont left-0 right-0 top-full text-5xl sm:text-6xl md:text-9xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
        >
          AURA
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="p-5 mt-5 block md:hidden"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        blanditiis possimus, doloribus molestiae provident ipsum quae.
      </motion.p>

      {/* 3D Scene */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="pt-16 md:p-0 h-[60vh]  md:h-[100vh] w-full  top-60 md:top-0"
      >
        <Canvas camera={{ fov: 25, position: [0, 0, 5] }}>
          <OrbitControls />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, 5, 5]} intensity={3} color="white" />
          <spotLight
            position={[0, 10, 5]}
            angle={0.3}
            intensity={2}
            penumbra={1}
          />

          <Texture />

          {/* Effects */}
          <EffectComposer>
            <Bloom
              intensity={2.0} // bloom ka power
              luminanceThreshold={0.2} // kitna bright hona chahiye trigger hone k liye
              luminanceSmoothing={0.9}
            />
            <ToneMapping />
          </EffectComposer>
     </Canvas> 
      </motion.div>
    </div>
  );
};

export default Hero;
