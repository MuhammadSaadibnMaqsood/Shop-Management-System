import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductStore from "../Zustand/useProducts";
import OrderModel from "../components/OrderModel";
import useOrderModelStore from "../Zustand/OrderModelStore";
import CartStore from "../Zustand/CartStore";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const IndividualProduct = () => {
  const { id } = useParams();
  const { productsZustand } = useProductStore();
  const { addToCart } = CartStore();

  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [overlay, setOverlay] = useState(false);

  const { showOrderModel, setOrderModel } = useOrderModelStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (productsZustand.length > 0) {
      const foundProduct = productsZustand.find(
        (p) => String(p._id) === String(id)
      );
      setProduct(foundProduct || null);
    }
  }, [productsZustand, id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImg(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className=" h-[100vh] flex items-center justify-center text-white">
        <p>Loading product...</p>
      </div>
    );
  }

  // Handle image change with overlay animation
  const handleImageChange = (img) => {
    setOverlay(true);
    setTimeout(() => {
      setMainImg(img);
    }, 400);
    setTimeout(() => {
      setOverlay(false);
    }, 800);
  };

  return (
    <div className="bg-zinc-950 min-h-[100vh] relative">
      {showOrderModel && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center">
          <OrderModel product={product} img={mainImg} />
        </div>
      )}

      <div className="pt-10">
        {/* Main Product Image with Overlay */}
        <div className="relative w-[80vw] md:w-[40vw] h-[50vh] mx-auto rounded-xl overflow-hidden">
          {/* Main Image */}
          <img
            className="object-cover w-full h-full rounded-xl"
            src={mainImg}
            alt={product.productName}
          />

          {/* White Overlay Div */}
          {overlay && (
            <div className="absolute top-0 left-0 h-full w-0 bg-black animate-slideOverlay"></div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex items-center justify-center w-[80vw] gap-5 mx-auto mt-5 rounded-xl">
          {product.images?.map((img, index) => (
            <div
              key={index}
              className={` w-32 h-20 sm:h-32 rounded-xl cursor-pointer transition-all ${
                mainImg === img ? "shadow-[0_0_10px_purple]" : ""
              }`}
              onClick={() => handleImageChange(img)}
            >
              <img
                className="object-cover rounded-xl w-full h-full"
                src={img}
                alt={product.productName}
              />
            </div>
          ))}
        </div>
        {/* PRODUCT DETAILS */}
        <div className="mt-10 max-w-4xl mx-auto px-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 text-center text-3xl font-bold">
            {product.productName}
          </h1>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          <div className=" flex gap-5 items-center justify-center w-full pt-10">
            {/* ORDER BUTTON   */}
            <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button
                onClick={() => {
                  setOrderModel(true);
                  scrollTo(0, 0);
                }}
                class="px-8  cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800"
              >
                Order Now!
              </button>
            </div>

            {/* ADD TO CART BUTTON  */}
            <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success("Product Added to cart");
                }}
                class="px-8 flex items-center justify-center gap-3  cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800"
              >
                <ShoppingCart />
                Add to cart
              </button>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-sm sm:text-base">
            <div className="bg-zinc-900/50 p-4 rounded-xl shadow-md text-white hover:shadow-[0px_7px_29px_0px_rgba(100,_100,_111,_0.2)] transition-all duration-500">
              <h2 className="text-lg font-semibold text-pink-400 mb-2">
                Product Info
              </h2>
              <p>
                <span className="font-medium">Brand:</span> {product?.brand}
              </p>
              <p>
                <span className="font-medium">Warranty:</span>{" "}
                {product?.warranty}
              </p>
              <p>
                <span className="font-medium">Price:</span> ${product?.price}
              </p>
              <p>
                <span className="font-medium">Available:</span>{" "}
                {product?.stock > 0 ? (
                  <span className="text-green-400">Yes</span>
                ) : (
                  <span className="text-red-400">No</span>
                )}
              </p>
            </div>

            <div className="bg-zinc-900/50 p-4 rounded-xl shadow-md text-white hover:shadow-[0px_7px_29px_0px_rgba(100,_100,_111,_0.2)] transition-all duration-500">
              <h2 className="text-lg font-semibold text-purple-400 mb-2">
                Shop Details
              </h2>
              <p>
                <span className="font-medium">Shop Name:</span>{" "}
                {product?.shopId.shopName}
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {product?.shopId.address}
              </p>
            </div>
          </div>

          {/* Owner */}
          <div className="bg-zinc-900/50 p-4 rounded-xl shadow-md text-white mt-6 hover:shadow-[0px_7px_29px_0px_rgba(100,_100,_111,_0.2)] pb-5 transition-all duration-500">
            <h2 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-purple-700 mb-2">
              Owner Details
            </h2>
            <p>
              <span className="font-medium">Name:</span>{" "}
              {product?.ownerId.userName}
            </p>
            <p>
              <span className="font-medium">Contact:</span>{" "}
              {product?.ownerId.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
