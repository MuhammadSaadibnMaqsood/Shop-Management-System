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
      "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "2",
    productName: "Travel Backpack",
    price: 90,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    _id: "3",
    productName: "Tote Bag",
    price: 60,
    category: "bags",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "4",
    productName: "Office Laptop Bag",
    price: 150,
    category: "bags",
    images: [
      "https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "10",
    productName: "Formal White Shirt",
    price: 70,
    category: "shirts",
    images: [
      "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "11",
    productName: "Denim Shirt",
    price: 65,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    _id: "12",
    productName: "Printed Summer Shirt",
    price: 55,
    category: "shirts",
    images: [
      "https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const bags = dummyProducts.filter((item) => item.category === "bags");
  const shirts = dummyProducts.filter((item) => item.category === "shirts");
  // console.log(shoes);

  return (
    <div className="bg-zinc-950">
        {/* INDIVIDUAL PRODUCT SECTION FOR SHOES  */}
      <div className="">
        <h1 className="text-5xl w-[70%] mx-auto text-white tekturFont py-5">
          Shoes
        </h1>

        <div className="">
          <ProductsSection cardData={shoes} />
        </div>
        {/* INDIVIDUAL PRODUCT SECTION FOR BAGS  */}
        <h1 className="text-5xl w-[70%] pt-7 mx-auto text-white tekturFont py-5">
          BAGS
        </h1>

        <div className="">
          <ProductsSection cardData={bags} />
        </div>
        {/* INDIVIDUAL PRODUCT SECTION SHIRTS */}
        <h1 className="text-5xl w-[70%] mx-auto text-white tekturFont pt-7 py-5">
          SHIRTS
        </h1>

        <div className="">
          <ProductsSection cardData={shirts} />
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
