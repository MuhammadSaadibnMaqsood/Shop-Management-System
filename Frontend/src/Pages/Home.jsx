import { useEffect } from "react";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import NewLetter from "../components/NewLetter";
import Products from "../components/Products";
import Testimonail from "../components/Testimonail";
import { motion } from "framer-motion";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" w-[100%] sticky top-0">
          <Hero />
        </div>
        <div className="h-[100%] w-[100%] sticky top-0 overflow-hidden">
          <Products />
        </div>

        <div className=" h-screen w-full sticky top-0 overflow-hidden bg-white">
          <Testimonail />
        </div>

        <div className="h-[100%] w-[100%] sticky top-0 overflow-hidden">
          <NewLetter />
        </div>
        <div className="h-[100%] w-[100%] sticky top-0 overflow-hidden">
          <FAQ />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
