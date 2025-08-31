import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import LocomotiveScroll from "locomotive-scroll";
import "../hero.css";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
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
    <div
      ref={scrollRef}
      data-scroll-container
      className="overflow-hidden homePageContainer flex flex-col"
    >
      {/* HERO (sticky rahega) */}
      <section
       
        className="sticky top-0 z-10"
      >
        <Hero />
      </section>

      <section
      
        className="relative z-20"
      >
        <Products />
      </section>
    </div>
  );
};

export default Home;
