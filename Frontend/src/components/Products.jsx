import React from "react";
import { motion,useScroll } from "framer-motion";

const Products = () => {
  return (
    <main className="bg-zinc-800 relative">
      <section className="h-[100vh] bg-zinc-800">
        <h1 className="text-9xl tekturFont pt-10 text-center font-bold text-white">
          PRODUCT WE HAVE !!
        </h1>
        <p className="w-9/12 mx-auto text-center mt-10 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          blanditiis ratione possimus praesentium quibusdam quos esse vel
          obcaecati repellendus exercitationem dolores saepe optio nulla, iure
          nostrum nihil voluptatum quaerat consectetur? Iure, soluta.
        </p>

        <div className="flex gap-10 mt-10 items-center justify-center">
          <div className="h-96 w-96 bg-white rounded-lg flex items-center justify-center">
            sd
          </div>
          <div className="h-96 w-96 bg-white rounded-lg flex items-center justify-center">
            sd
          </div>
          <div className="h-96 w-96 bg-white rounded-lg flex items-center justify-center">
            sd
          </div>
          <div className="h-96 w-96 bg-white rounded-lg flex items-center justify-center">
            sd
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
