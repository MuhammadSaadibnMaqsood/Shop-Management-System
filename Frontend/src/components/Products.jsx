import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "../locomotive.css";

const Products = () => {
  const scrollY = useMotionValue(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
      // Properly calculate page height
      resetNativeScroll: true,
      // Important for proper height calculation
      getDirection: true,
      getSpeed: true,
    });

    locoScroll.on("scroll", (obj) => {
      scrollY.set(obj.scroll.y);
    });

    // Update scroll when window is resized
    window.addEventListener("load", () => locoScroll.update());
    window.addEventListener("resize", () => locoScroll.update());

    return () => {
      locoScroll.destroy();
      window.removeEventListener("load", () => locoScroll.update());
      window.removeEventListener("resize", () => locoScroll.update());
    };
  }, [scrollY]);

  const y = useTransform(scrollY, [0, 300], [50, 0]);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <main 
      ref={scrollRef} 
      data-scroll-container 
      className="bg-black min-h-screen"
    >
      {/* Section */}
      <section 
        data-scroll-section 
        className="min-h-screen bg-zinc-800 flex items-center justify-center"
      >
        <motion.h1 
          style={{ y, opacity }} 
          className="text-5xl text-center font-bold text-white"
        >
          Products (Animated)
        </motion.h1>
        <h1 className="text-white">
            HElooo
        </h1>
      </section>
      
      {/* Add more sections to test scrolling */}
      <section 
        data-scroll-section 
        className="min-h-screen bg-zinc-900 flex items-center justify-center"
      >
        <h2 className="text-4xl text-white">Another Section</h2>
      </section>
      
      <section 
        data-scroll-section 
        className="min-h-screen bg-zinc-700 flex items-center justify-center"
      >
        <h2 className="text-4xl text-white">Final Section</h2>
      </section>
    </main>
  );
};

export default Products;