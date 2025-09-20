import React, { useState } from "react";
import useOrder from "../hooks/useOrder";
import Loading from "./Loading";
import { X } from "lucide-react";
import useOrderModelStore from "../Zustand/OrderModelStore";

const OrderModel = ({ product, img }) => {
  const [orderData, setorderData] = useState({
    address: "",
    paymentType: "",
    img: img,
    quantity: null,
  });

  const { setOrderModel } = useOrderModelStore();

  const { mutate: order, isPending, error } = useOrder();

  function handleSubmit(e) {
    e.preventDefault();

    order({ orderData, id: product._id });
  }

  if (isPending) return <Loading />;
  return (
    <div className="text-black bg-white w-[80vw] md:w-[50vw] rounded-xl shadow-lg">
      <div className="flex justify-end pr-4 pt-2">
        <button onClick={()=> setOrderModel(false)}>
          <X className="w-5 h-5 cursor-pointer text-black" />
        </button>
      </div>
      <div className="flex items-center justify-between w-full rounded-t-xl p-6 border-b border-gray-200">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {product.productName}
          </h1>
          <p className="text-lg text-gray-600 font-medium">${product.price}</p>
        </div>
        <img
          className="object-cover h-28 w-28 rounded-lg border border-gray-200"
          src={img}
          alt="order-product-img"
        />
      </div>

      {/* Input & Select */}
      <form onSubmit={handleSubmit}>
        <div className="p-6 flex flex-col gap-4">
          <input
            onChange={(e) =>
              setorderData({ ...orderData, address: e.target.value })
            }
            required
            className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div className="w-full p-6 md:p-0 gap-5 md:gap-0 flex-col md:flex-row flex items-center justify-around">
          <select
            onChange={(e) =>
              setorderData({ ...orderData, paymentType: e.target.value })
            }
            required
            className="px-4 py-2 cursor-pointer border border-gray-300 rounded-lg w-full md:w-[40%] focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option disabled value="">
              Select Payment Method
            </option>
            <option className="cursor-pointer" value="COD">
              Cash on Delivery
            </option>
          </select>
          {/* INPUT FOR QUNATITY  */}
          <input
            onChange={(e) =>
              setorderData({ ...orderData, quantity: e.target.value })
            }
            required
            className="px-4 py-2 border cursor-pointer border-gray-300 rounded-lg w-full md:w-[40%] focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter quantity"
          />
        </div>

        {/* Order Button */}
        <div className="flex mb-10  items-center justify-center w-full pt-5">
          <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
            <button
              type="submit"
              disabled={isPending}
              className="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Placing Order..." : "Order Now!"}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-2">
            Failed to place order. Try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default OrderModel;
