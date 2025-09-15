import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ProductsSection from "../components/ProductsSection";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { dummyProducts } from "../../dummyData/Dummy";
import { Funnel } from "lucide-react";
import useProductsStore from "../Zustand/useProducts";

const Allproducts = () => {
  const { setProducts, productsZustand } = useProductsStore();
  const [filteredItem, setFilteredItem] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterArray, setFilterArray] = useState([]);

  const { data: products, isLoading, error } = useGetAllProducts();

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const finalProducts =
    productsZustand && productsZustand.length > 0
      ? productsZustand
      : dummyProducts;

  const shoes =
    products?.filter((p) => p.category?.toLowerCase().includes("shoe")) || [];
  const bags =
    products?.filter((p) => p.category?.toLowerCase().includes("bag")) || [];
  const shirts =
    products?.filter((p) => p.category?.toLowerCase().includes("shirt")) || [];

  useEffect(() => {
    // console.log(shoes);
  }, [shoes, products, shirts]);

  useEffect(() => {
    setFilteredItem(finalProducts);
  }, [finalProducts]);

  // SEARCH FILTER LOGIC
  function searchFilter(e) {
    if (e.key === "Enter") {
      const searchValue = e.target.value.toLowerCase();

      if (searchValue.trim() === "") {
        setFilteredItem(finalProducts);
        setIsSearching(false);
        return;
      }

      const search = finalProducts.filter(
        (product) =>
          product.category.toLowerCase().includes(searchValue) ||
          product.productName.toLowerCase().includes(searchValue)
      );

      setFilteredItem(search);
      setIsSearching(true);
    }
  }

  // CHECK BOX LOGIC (Price filter)
  function handleCheckbox(value) {
    setFilterArray((prev) => {
      let updated;
      if (prev.includes(value)) {
        updated = prev.filter((item) => item !== value); // remove
      } else {
        updated = [...prev, value]; // add
      }

      if (updated.length > 0) {
        setFilteredItem(
          finalProducts.filter((product) =>
            updated.some((range) => product.price <= range)
          )
        );
        setIsSearching(true);
      } else {
        setFilteredItem(finalProducts);
        setIsSearching(false);
      }

      return updated;
    });
  }

  // HANDLE FILTER MODAL VISIBILITY
  function handleFilterModel() {
    setShowFilter(false);
  }

  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-xl text-red-500">Error loading products</p>
    );

  return (
    <div className="bg-zinc-950 text-white relative">
      {/* Search & Filter Row */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6">
        <div className="w-full">
          <input
            type="text"
            onKeyDown={searchFilter}
            placeholder="Search item"
            className="bg-white ml-0 px-4 py-2 lg:ml-44 text-black rounded-2xl w-full md:w-1/2 "
          />
        </div>
        <div className="flex md:block items-center justify-end w-full md:w-32 mt-6 md:mt-0">
          <Funnel
            onClick={() => setShowFilter(true)}
            className="w-7 h-7 cursor-pointer"
          />
        </div>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10">
          <div className="p-10 absolute text-black z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-96 bg-white">
            <h1 className="text-center mb-10">Price Ranges</h1>
            {[
              { label: "0-100Rs", value: 100 },
              { label: "0-200Rs", value: 200 },
              { label: "0-300Rs", value: 300 },
            ].map((range) => (
              <div
                key={range.value}
                className="flex items-center p-5 gap-5 justify-center"
              >
                <input
                  onChange={() => handleCheckbox(range.value)}
                  className="cursor-pointer"
                  type="checkbox"
                  checked={filterArray.includes(range.value)}
                />
                <span>{range.label}</span>
              </div>
            ))}
            <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button
                onClick={handleFilterModel}
                className="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories (Only when not searching) */}
      {!isSearching &&
        (shoes.length > 0 || bags.length > 0 || shirts.length > 0) && (
          <div className="relative">
            <h1 className="text-5xl w-[70%] mx-auto text-white tekturFont py-5">
              Shoes
            </h1>
            <ProductsSection cardData={shoes} />

            <h1 className="text-5xl w-[70%] pt-7 mx-auto text-white tekturFont py-5">
              Bags
            </h1>
            <ProductsSection cardData={bags} />

            <h1 className="text-5xl w-[70%] mx-auto text-white tekturFont pt-7 py-5">
              Shirts
            </h1>
            <ProductsSection cardData={shirts} />
          </div>
        )}

      {/* All Products (Default View) */}
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
          <div className="w-[75%] justify-center flex gap-10 sm:gap-2 xl:gap-7 md:gap-10 flex-wrap mx-auto py-5">
            {finalProducts.map((item) => (
              <ProductCard
                key={item._id || item.productName}
                productId={item._id}
                productName={item.productName}
                price={item.price}
                image={item.images[0]}
                category={item.category}
              />
            ))}
          </div>
        </>
      )}

      {/* Search / Filter Results */}
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
          <div className="w-[70%] flex gap-10 justify-evenly items-center flex-wrap mx-auto py-5">
            {filteredItem.length > 0 ? (
              filteredItem.map((item) => (
                <ProductCard
                  key={item._id || item.productName}
                  productId={item._id}
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
