import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const Products = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { amount: 0.5 });
  const [scrollDirection, setScrollDirection] = useState("down");
  const prevScrollY = useRef(0);

  // Scroll tracking for text size animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation for scroll progress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Text size transformation based on scroll with smooth spring
  const fontSize = useTransform(smoothScroll, [0, 0.5, 1], ["2rem", "4.5rem", "3rem"]);
  const scale = useTransform(smoothScroll, [0, 0.5, 1], [0.8, 1.2, 1]);
  const y = useTransform(smoothScroll, [0, 1], [50, -50]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current + 5) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY.current - 5) {
        setScrollDirection("up");
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="bg-zinc-900 py-20 px-5">
      <section className="mx-auto">
        <motion.h1
          ref={headingRef}
          style={{
            fontSize,
            scale,
            y
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : scrollDirection === "up" ? 0 : 0,
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="tekturFont pt-0 text-center font-bold text-white mb-10"
        >
          PRODUCTS WE HAVE !!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mt-10 text-white text-lg mb-16"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          blanditiis ratione possimus praesentium quibusdam quos esse vel
          obcaecati repellendus exercitationem dolores saepe optio nulla, iure
          nostrum nihil voluptatum quaerat consectetur? Iure, soluta.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1, ease: "easeOut" }}
              className="h-80 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-xl font-semibold text-gray-800">Product {item}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;