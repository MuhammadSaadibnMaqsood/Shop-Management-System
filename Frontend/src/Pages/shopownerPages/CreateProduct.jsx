import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
const CreateProduct = () => {
  return (
    <div className="h-full min-h-screen bg-zinc-950 text-white">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center py-10  text-white w-ful group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-3xl sm:text-3xl md:text-5xl AsimovianFont font-bold tracking-widest relative"
      >
        List your product
      </motion.h1>

      <div className="flex gap-5 flex-wrap ">
        <div className="relative">
          <input
            className="absolute top-0  bg-transparent w-12 h-12"
            type="file"
            required={true}
          />
          <Plus className="absolute top-0 text-white w-12 h-12" />
        </div>
        {/* <input className="bg-white" type="file" required={true} />
        <input className="bg-white" type="file" required={true} />
        <input className="bg-white" type="file" required={true} /> */}
      </div>
    </div>
  );
};

export default CreateProduct;
