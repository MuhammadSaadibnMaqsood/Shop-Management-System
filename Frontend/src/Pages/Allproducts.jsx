import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ProductsSection from "../components/ProductsSection";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { dummyProducts } from "../../dummyData/Dummy";
import { Funnel } from "lucide-react";

const Allproducts = () => {
  const shoes = dummyProducts.filter((item) => item.category === "shoes");
  const bags = dummyProducts.filter((item) => item.category === "bags");
  const shirts = dummyProducts.filter((item) => item.category === "shirts");

  const { products, isLoading, error } = useGetAllProducts();

  // console.log(products);

  return (
    <div className="bg-zinc-950 text-white">
      <div className="flex items-center justify-between p-6">
        <div className="w-full"><input type="text" placeholder="search item" className="bg-white ml-0 px-4 py-2 lg:ml-44 text-black rounded-2xl w-1/2" /></div>
        <Funnel className="w-7 h-7" />
      </div>

      <div className="hidden">
        <form
          className="flex w-full flex-col gap-5 justify-end items-center"
          action=""
        >
          {/* PRICE RANGES  */}
          <label htmlFor="">Price Rages</label>
          <div className="">
            <input type="checkbox" /> <span>0-100$</span>
          </div>
          <div className="">
            <input type="checkbox" /> <span>0-200$</span>
          </div>
          <div className="">
            <input type="checkbox" /> <span>0-300$</span>
          </div>
        </form>
      </div>
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
