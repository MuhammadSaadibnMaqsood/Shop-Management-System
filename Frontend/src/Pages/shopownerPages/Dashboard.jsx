import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dummyProducts } from "../../../dummyData/Dummy";
import useGetOwnerProducts from "../../hooks/useGetOwnerProducts";
import { Link } from "react-router-dom";
import Tabs from "../../components/Tabs";
const Dashboard = () => {
  const { data: ownerProducts, isLoading, isError } = useGetOwnerProducts();

  const [dashBoardData, setdashBoardData] = useState({});

  useEffect(() => {
    if (!ownerProducts) return;

    let totalSell = 0;
    let totalProducts = 0;

    ownerProducts.forEach((product) => {
      totalSell += product.totalSell || 0;
      totalProducts += 1;
    });

    setdashBoardData({ totalSell, totalProducts });
  }, [ownerProducts]);

  return (
    <div className="min-h-[90vh] bg-zinc-950 p-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center pb-10 text-white w-ful group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-3xl sm:text-3xl md:text-5xl AsimovianFont font-bold tracking-widest relative"
      >
        DASHBOARD OVERVIEW
      </motion.h1>

      <div className="flex sm:hidden  justify-end mb-5">
        <div className="rainbow relative w-40 z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
          <Link to="/owner/createproduct">
            <button className="px-8  cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800">
              Add product
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Total Sales */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium text-gray-300">Total Sales</h2>
          <p className="text-3xl font-bold text-green-400 mt-3">
            {dashBoardData.totalSell}+
          </p>
        </div>

        {/* Total Listed Items */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium text-gray-300">Listed Items</h2>
          <p className="text-3xl font-bold text-blue-400 mt-3">
            {dashBoardData.totalProducts}
          </p>
        </div>
      </div>

      <div>
        <Tabs ownerProducts={ownerProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
