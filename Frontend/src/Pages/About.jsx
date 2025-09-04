import React from "react";
import { delay, motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <div className="h-screen w-full relative bg-black text-white flex items-center justify-center">
        <motion.img
        
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="h-full"
          src="/shoe4.webp"
          alt=""
        />

        <motion.h1
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.5,duration:1.5}}
        className="text-7xl absolute top-35 right-100 AsimovianFont">AURA</motion.h1>
      </div>
    </div>
  );
};

export default About;
