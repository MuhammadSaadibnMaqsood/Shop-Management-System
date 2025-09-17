import React, { useState } from "react";
import useOrder from "../hooks/useOrder";

const OrderModel = ({ product, img }) => {
  const [orderData, setorderData] = useState({
    address: "",
    paymentType: "",
    img: img,
  });
  // console.log(product._id);

  const { mutate: order, isLoading, error } = useOrder();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(orderData,product._id);

    order(orderData);
  }

  return (
    <div className="text-black h-[60vh] md:h-[60vh] bg-white w-[80vw] md:w-[50vw] rounded-xl shadow-lg">
      {/* Product Info */}
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
            className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter your address"
          />
          <select
            onChange={(e) =>
              setorderData({ ...orderData, paymentType: e.target.value })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option disabled value="">
              Select Payment Method
            </option>
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>

        {/* Order Button */}
        <div className="flex items-center justify-center w-full pt-5">
          <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Placing Order..." : "Order Now!"}
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
