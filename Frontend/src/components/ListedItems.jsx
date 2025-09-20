import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useDislisrProduct } from "../hooks/useDislisrProduct";
import Loading from "./Loading";

const ListedItems = ({ ownerProducts }) => {
  const { mutate: dislistItem, isPending } = useDislisrProduct();

  function handleDislist(id) {
    dislistItem(id);
  }

  if (isPending) return <Loading />;
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
                <th className="px-6 py-3 hidden sm:block border-b border-zinc-800">
                  Price
                </th>
                <th className="px-6 py-3 border-b border-zinc-800">Stock</th>

                {/* Sell column sirf md screens par */}
                <th className="px-6 py-3 hidden md:table-cell border-b border-zinc-800">
                  Sell
                </th>

                {/* Dislist hamesha dikhana ho to hidden hatado */}
                <th className="px-6 py-3 border-b border-zinc-800">
                  Dislist Product
                </th>
              </tr>
            </thead>
            <tbody>
              {ownerProducts?.map((product, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-800 transition duration-200"
                >
                  <td className="px-6 py-4 border-b border-zinc-800 font-medium">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell border-b border-zinc-800 text-green-400">
                    Rs. {product.price}
                  </td>
                  <td className="px-6 py-4 border-b border-zinc-800">
                    {product.stock || 0}
                  </td>

                  {/* Sell column sirf md screens par */}
                  <td className="px-6 py-4 hidden md:table-cell border-b border-zinc-800 text-blue-400">
                    {product.totalSell || 0}
                  </td>

                  {/* Dislist column hamesha visible */}
                  <td className="px-6 py-4 border-b border-zinc-800 text-red-400">
                    <button
                      onClick={() => handleDislist(product._id)}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
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

export default ListedItems;
