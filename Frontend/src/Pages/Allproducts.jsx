import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ProductsSection from "../components/ProductsSection";
import useGetAllProducts from '../hooks/useGetAllProducts'
import { dummyProducts } from "../../dummyData/Dummy";

const Allproducts = () => {
  const shoes = dummyProducts.filter((item) => item.category === "shoes");
  const bags = dummyProducts.filter((item) => item.category === "bags");
  const shirts = dummyProducts.filter((item) => item.category === "shirts");


  const {products,isLoading,error} = useGetAllProducts();

  console.log(products);
  

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
