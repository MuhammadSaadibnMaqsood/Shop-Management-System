import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../Zustand/useProducts";

const IndividualProduct = () => {
  const { id } = useParams();
  const { productsZustand } = useProductStore();

  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [overlay, setOverlay] = useState(false);

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
    console.log(product);
  }, [product]);

  if (!product) {
    return (
      <div className="text-black h-[100vh] flex items-center justify-center">
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
    <div className="bg-zinc-950 min-h-[100vh]">
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
        {/* PRODUCT DETAILS  */}
        <div>
          <h1 className=" bg-clip-text bg-transparent bg-gradient-to-r from-pink-500 to-purple-700 text-center text-3xl pt-10">
            {product.productName}
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-white w-[70%] opacity-70 text-center  text-sm pt-10">
              {product.description}
            </p>
          </div>

          <div className="text-white">
            <p>Brand: {product?.brand}</p>
            <p>Warranty: {product?.warranty}</p>
            <p>Price: {product?.price}</p>
            <p>Avialable: {product?.stock > 0 ? "Yes" : "No"}</p>
          </div>
        </div>

        {/* SHOP DETAILS  */}
        {/* OWNER DETAILS  */}
        <div className="text-white px-2 py-5">
          <h1 className="text-2xl ">Owner details</h1>
          <h1>Name: {product?.ownerId.userName}</h1>
          <h1>Contact: {product?.ownerId.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
