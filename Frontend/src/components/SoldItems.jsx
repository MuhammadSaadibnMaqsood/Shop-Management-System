import React from "react";
import { motion } from "framer-motion";
import useGetSoldItems from "../hooks/useGetSoldItems";

const SoldItems = () => {
  const { data: soldItems } = useGetSoldItems();
  // console.log(soldItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {" "}
      <div className="text-white pt-10">
        <div className="overflow-x-auto rounded-lg shadow-lg border border-zinc-800">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-900 text-gray-300">
              <tr>
                <th className="px-6 py-3 border-b border-zinc-800">Product</th>
                <th className="px-6 py-3 hidden sm:block  border-b border-zinc-800">
                  Payment
                </th>
                <th className="px-6 py-3 border-b border-zinc-800">Address</th>
                <th className="px-6 py-3 border-b hidden md:block border-zinc-800">
                  Delivered
                </th>
              </tr>
            </thead>
            <tbody>
              {soldItems?.map((product, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-800 transition duration-200"
                >
                  <td className="px-6 py-4 border-b border-zinc-800 font-medium">
                    {product.product.productName}
                  </td>
                  <td
                    className={`${
                      product.paymentStatus == "PENDING"
                        ? "text-green-500"
                        : "text-orange-400"
                    }px-6 py-4 hidden sm:block border-b border-zinc-800 `}
                  >
                    {product.paymentStatus}
                  </td>
                  <td className="px-6 py-4 border-b border-zinc-800">
                    {product.address || 0}
                  </td>
                  <td className="px-6 py-4 hidden md:block border-b border-zinc-800 text-blue-400">
                    <label className="relative flex items-center cursor-pointer">
                      <input type="checkbox" className="peer hidden" />
                      <span className="w-5 h-5 border-2 border-blue-400 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all duration-300 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default SoldItems;
