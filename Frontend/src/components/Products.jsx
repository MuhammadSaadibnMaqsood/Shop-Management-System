import { motion, useScroll, useTransform } from "framer-motion";

const Products = () => {
  const { scrollYProgress } = useScroll(); 
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]); // fade-in between 20%–40% scroll
  const y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]); // slide from bottom

  return (
    <section className="h-screen flex items-center justify-center bg-zinc-800">
      <motion.h1 
        style={{ opacity, y }} 
        className="text-5xl font-bold text-white"
      >
        Products
      </motion.h1>
      <h1>Products</h1>
    </section>
  );
};

export default Products;
