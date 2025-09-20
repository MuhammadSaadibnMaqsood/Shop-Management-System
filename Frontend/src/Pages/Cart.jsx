import { useEffect } from "react";
import CartStore from "../Zustand/CartStore";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems } = CartStore();

  useEffect(() => {
    console.log("Cart item:", cartItems);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-zinc-950 w-full text-white p-5 relative">
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="text-center group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-5xl sm:text-6xl md:text-9xl AsimovianFont font-bold tracking-widest relative"
      >
        CART
        <motion.span
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-5xl sm:text-6xl md:text-9xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
        >
          CART
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full md:w-[80%] flex gap-5 flex-wrap bg-zinc-950 p-10 top-0 absolute"
      >
        {cartItems.map((item) => (
          <div className="pb-5 w-96 bg-zinc-800 rounded-2xl p-5">
            <div className="w-[80%] h-40 mx-auto pb-5">
              <img className="w-full rounded-2xl h-full object-cover" src={item.images[0]} alt="" />
            </div>
            <h1>Product name: {item.productName}</h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cart;
