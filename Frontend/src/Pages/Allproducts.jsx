import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
const dummyProducts = [
  {
    _id: "1",
    productName: "Bag",
    price: 120,
    category: "shoes",
    images: [
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    _id: "2",
    productName: "Adidas Ultraboost",
    price: 150,
    category: "shoes",
    images: ["/shoe2.jpg"],
  },
  {
    _id: "3",
    productName: "Casual Cotton Shirt",
    price: 40,
    category: "shirts",
    brand: "Levis",
    images: [
      "https://plus.unsplash.com/premium_photo-1683140431958-31505d0fd1ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww",
    ],
  },
];

const Allproducts = () => {
  return (
    <div className="bg-zinc-950">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="AsimovianFont pt-10 bg-gradient-to-r from-[#c6005c] to-[#4a00b8] bg-clip-text text-transparent text-center text-6xl md:text-7xl font-bold"
      >
        Product we have !
      </motion.h1>

      <div>
        {dummyProducts.map((item) => (
          <ProductCard
            key={item._id}
            productName={item.productName}
            price={item.price}
            image={item.images[0]}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
