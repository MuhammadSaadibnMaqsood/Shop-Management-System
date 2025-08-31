// Home.jsx
import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="overflow-hidden">
      <section data-scroll-section>
        <Hero />
      </section>
      <section data-scroll-section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
