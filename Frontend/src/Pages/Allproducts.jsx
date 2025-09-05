import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ProductsSection from "../components/ProductsSection";
const dummyProducts = [
  // 👜 Bags
  {
    _id: "1",
    productName: "Leather Handbag",
    price: 120,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1627123424574-025d908aa8f5?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "2",
    productName: "Travel Backpack",
    price: 90,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "3",
    productName: "Tote Bag",
    price: 60,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "4",
    productName: "Office Laptop Bag",
    price: 150,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },

  // 👟 Shoes
  {
    _id: "5",
    productName: "Adidas Ultraboost",
    price: 180,
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "6",
    productName: "Nike Air Max",
    price: 200,
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "7",
    productName: "Puma Running Shoes",
    price: 140,
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "8",
    productName: "Leather Formal Shoes",
    price: 220,
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  // 👕 Shirts
  {
    _id: "9",
    productName: "Casual Cotton Shirt",
    price: 45,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "10",
    productName: "Formal White Shirt",
    price: 70,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1598032892707-5b08b68d1c6f?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "11",
    productName: "Denim Shirt",
    price: 65,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1618354691325-67852e8a9b42?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "12",
    productName: "Printed Summer Shirt",
    price: 55,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1624378439575-2d9e2c1e25c7?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },

  // 👖 Jeans
  {
    _id: "13",
    productName: "Slim Fit Jeans",
    price: 80,
    category: "jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "14",
    productName: "Ripped Blue Jeans",
    price: 90,
    category: "jeans",
    images: [
      "https://images.unsplash.com/photo-1607345366928-402d96b60a3a?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "15",
    productName: "Classic Black Jeans",
    price: 85,
    category: "jeans",
    images: [
      "https://images.unsplash.com/photo-1602810319256-36c1b2cc74e5?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "16",
    productName: "Grey Skinny Jeans",
    price: 95,
    category: "jeans",
    images: [
      "https://images.unsplash.com/photo-1593032465171-8e5cf72e23a6?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },

  // ⌚ Watches
  {
    _id: "17",
    productName: "Analog Wrist Watch",
    price: 200,
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "18",
    productName: "Luxury Gold Watch",
    price: 500,
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1585241645927-43cbbf8e7e8d?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "19",
    productName: "Smart Watch",
    price: 250,
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1523475496153-3d6ccf62d936?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
  {
    _id: "20",
    productName: "Casual Sport Watch",
    price: 150,
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&q=80&w=1080",
    ],
  },
];

const Allproducts = () => {
  const shoes = dummyProducts.filter((item) => item.category === "shoes");
  console.log(shoes);

  return (
    <div className="bg-zinc-950">
      {/* <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="AsimovianFont pt-10 bg-gradient-to-r from-[#c6005c] to-[#4a00b8] bg-clip-text text-transparent text-center text-6xl md:text-7xl font-bold"
      >
        Product we have !
      </motion.h1> */}
      <div className="">
        {/* INDIVIDUAL PRODUCT SECTION  */}
        <div className="">
          <ProductsSection cardData={shoes} />
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
