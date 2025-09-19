import React from "react";
import { motion } from "framer-motion";
import useGetSoldItems from "../hooks/useGetSoldItems";

const SoldItems = () => {
  const { data: soldItems } = useGetSoldItems();
  console.log(soldItems);

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
                <th className="px-6 py-3 border-b border-zinc-800">Stock</th>
                <th className="px-6 py-3 border-b hidden md:block border-zinc-800">
                  Sell
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
                      product.paymentStatus
                        ? "text-green-500"
                        : "text-orange-400"
                    }px-6 py-4 hidden sm:block border-b border-zinc-800 `}
                  >
                    {product.paymentStatus}
                  </td>
                  <td className="px-6 py-4 border-b border-zinc-800">
                    {product.product.stock || 0}
                  </td>
                  <td className="px-6 py-4 hidden md:block border-b border-zinc-800 text-blue-400">
                    {product.product.sell || 0}
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
