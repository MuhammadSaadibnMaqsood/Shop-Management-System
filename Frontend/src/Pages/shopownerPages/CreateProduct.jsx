import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const CreateProduct = () => {
  const [productData, setproductData] = useState({
    productName: null,
    price: null,
    description: null,
    category: null,
    stock: null,
    brand: null,
  });
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center px-6 py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center py-6 text-white w-full group 
        hover:bg-clip-text hover:text-transparent 
        hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] 
        transition-all duration-700 ease-in-out 
        text-3xl md:text-5xl AsimovianFont font-bold tracking-widest"
      >
        List your product
      </motion.h1>

      <form className="w-full max-w-3xl bg-zinc-900 p-8 rounded-2xl shadow-xl space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 
            text-white border border-zinc-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 
            text-white border border-zinc-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Category"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 
            text-white border border-zinc-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="number"
            placeholder="Warranty (months)"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 
            text-white border border-zinc-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="number"
            placeholder="Stock"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 
            text-white border border-zinc-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="text"
            placeholder="Brand"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 
            text-white border border-zinc-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* File Uploads */}
        <div className="flex flex-wrap gap-5">
          {[1, 2, 3, 4].map((i) => (
            <label
              key={i}
              className="w-24 h-24 flex items-center justify-center 
              border-2 border-dashed border-zinc-600 rounded-xl 
              cursor-pointer hover:border-purple-600 transition"
            >
              <input type="file" className="hidden" />
              <Plus className="w-10 h-10 text-zinc-400 group-hover:text-white" />
            </label>
          ))}
        </div>

        {/* Description */}
        <textarea
          rows={6}
          placeholder="Description"
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 
          text-white border border-zinc-700 focus:outline-none 
          focus:ring-2 focus:ring-purple-600 resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r 
          from-[#c6005c] to-[#4a00b8] text-white font-bold 
          hover:opacity-90 transition"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
