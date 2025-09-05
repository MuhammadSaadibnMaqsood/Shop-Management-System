import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="h-screen w-full relative bg-black text-white flex flex-col xl:flex-row items-center justify-center">
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{
            opacity: { duration: 0.7, delay: 2 },
            y: { duration: 0.7, delay: 2 },
          }}
          whileHover={{ scale: 1.05 }}
          className="h-full object-contain hidden xl:block"
          src="/shoe4.webp"
          alt="shoe"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out md:text-9xl text-5xl sm:text-6xl static xl:absolute xl:top-35 xl:right-55 AsimovianFont drop-shadow-[0_5px_15px_rgba(200,0,200,0.3)]"
        >
          AURA
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-5xl sm:text-6xl md:text-9xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
          >
            AURA
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="static xl:absolute top-80 left-60 w-96 text-gray-300 leading-relaxed"
        >
          This role-based e-commerce platform allows customers to explore and
          purchase products effortlessly, while shop owners and admins can
          manage shops, products, and orders with ease, ensuring a smooth and
          personalized shopping experience.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
