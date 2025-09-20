import { useEffect, useState } from "react";
import CartStore from "../Zustand/CartStore";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = CartStore();
  const [showHeading, setShowHeading] = useState(true);

  useEffect(() => {
    console.log("Cart item:", cartItems);

    // heading 2.5s ke baad gayab ho jaye
    const timer = setTimeout(() => setShowHeading(false), 1000);
    return () => clearTimeout(timer);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-zinc-950 w-full text-white p-5 relative flex flex-col items-center">
      {/* AnimatePresence se heading smoothly remove hogi */}
      <AnimatePresence>
        {showHeading && (
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className="text-center text-5xl sm:text-6xl md:text-8xl AsimovianFont font-bold tracking-widest mb-10"
          >
            CART
            <motion.span
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute left-0 right-0 top-full text-5xl sm:text-6xl md:text-8xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
            >
              CART
            </motion.span>
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Cart Items Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="w-full transition-all duration-700 md:w-[90%] flex gap-6 flex-wrap justify-center"
      >
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-80 transition-all duration-700 bg-zinc-800 rounded-2xl p-5 shadow-lg shadow-zinc-900"
            >
              <div className="w-[80%] h-40 mx-auto pb-5">
                <img
                  className="w-full h-full rounded-2xl object-cover"
                  src={item.images[0]}
                  alt={item.productName}
                />
              </div>
              <h1 className="text-lg font-semibold mb-1">{item.productName}</h1>
              <h2 className="mb-3">
                Price: <span className="text-green-500">${item.price}</span>
              </h2>
              <p className="text-center mb-5 text-gray-400 text-sm">
                Want to check item again and order??
              </p>
              <div className="rainbow w-40 relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 mx-auto active:scale-100">
                <Link to={`/products/${item._id}`}>
                  <button className="px-8 cursor-pointer py-3 text-sm text-white rounded-full font-medium bg-gray-800">
                    See product
                  </button>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-lg">Your cart is empty.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
