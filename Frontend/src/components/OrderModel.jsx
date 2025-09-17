import React, { useState } from "react";

const OrderModel = ({ product, img }) => {
  console.log("Product:", product);
  console.log("img:", img);

  const [orderData, setorderData] = useState({
    address: "",
    paymentType: "",
    img: "",
  });

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
      <form onSubmit={handleSumit}>
        <div className="p-6 flex flex-col gap-4">
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter your address"
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option value="">Select Payment Method</option>
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>

        {/* Order Button */}
        <div className="flex items-center justify-center w-full pt-5">
          <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
            <button
              type="submit"
              className="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800"
            >
              Order Now!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderModel;
