import React, { useState } from "react";
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

  const [filteredItem, setFilteredItem] = useState(dummyProducts);
  const [isSearching, setIsSearching] = useState(false);

  const { products, isLoading, error } = useGetAllProducts();

  function searchFilter(e) {
    if (e.key === "Enter") {
      const searchValue = e.target.value.toLowerCase();

      if (searchValue.trim() === "") {
        setFilteredItem([]); // reset
        setIsSearching(false);
        return;
      }

      const search = dummyProducts.filter(
        (product) =>
          product.category.toLowerCase().includes(searchValue) ||
          product.productName.toLowerCase().includes(searchValue)
      );

      setFilteredItem(search);
      setIsSearching(true);
    }
  }

  return (
    <div className="bg-zinc-950 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between p-6">
        <div className="w-full">
          <input
            type="text"
            onKeyDown={searchFilter}
            placeholder="search item"
            className="bg-white ml-0 px-4 py-2 lg:ml-44 text-black rounded-2xl w-full md:w-1/2 "
          />
        </div>
        <div className="flex md:block items-center justify-end w-full md:w-32 mt-6 md:mt-0">

        <Funnel className="w-7 h-7" />
        </div>
      </div>

      {/* 👇 agar search nh ho to normal sections dikhayenge */}
      {!isSearching && (
        <div>
          {/* INDIVIDUAL PRODUCT SECTION FOR SHOES  */}
          <h1 className="text-5xl w-[70%] mx-auto text-white tekturFont py-5">
            Shoes
          </h1>
          <ProductsSection cardData={shoes} />

          {/* INDIVIDUAL PRODUCT SECTION FOR BAGS  */}
          <h1 className="text-5xl w-[70%] pt-7 mx-auto text-white tekturFont py-5">
            BAGS
          </h1>
          <ProductsSection cardData={bags} />

          {/* INDIVIDUAL PRODUCT SECTION FOR SHIRTS */}
          <h1 className="text-5xl w-[70%] mx-auto text-white tekturFont pt-7 py-5">
            SHIRTS
          </h1>
          <ProductsSection cardData={shirts} />
        </div>
      )}

      {!isSearching && (
        <>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center my-10 group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-5xl AsimovianFont font-bold tracking-widest relative"
          >
            ALL PRODUCTS
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
              className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-5xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
            >
              ALL PRODUCTS
            </motion.span>
          </motion.h1>
          <div className="w-[70%] flex gap-10 flex-wrap mx-auto py-5">
            {filteredItem.map((item) => (
              <ProductCard
                key={item.productName}
                productName={item.productName}
                price={item.price}
                image={item.images[0]}
                category={item.category}
              />
            ))}
          </div>
        </>
      )}

      {/* 👇 agar search ho to sirf filteredItem show karenge */}
      {isSearching && (
        <>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center my-10 group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-5xl AsimovianFont font-bold tracking-widest relative"
          >
            SEARCH RESULTS
          </motion.h1>
          <div className="w-[70%] flex gap-10 flex-wrap mx-auto py-5">
            {filteredItem.length > 0 ? (
              filteredItem.map((item) => (
                <ProductCard
                  key={item.productName}
                  productName={item.productName}
                  price={item.price}
                  image={item.images[0]}
                  category={item.category}
                />
              ))
            ) : (
              <p className="text-center text-xl">No products found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Allproducts;
