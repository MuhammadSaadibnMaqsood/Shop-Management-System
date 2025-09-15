import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../Zustand/useProducts";

const IndividualProduct = () => {
  const { id } = useParams();
  const { productsZustand } = useProductStore();

  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [animation, setAnimation] = useState(false);

  // Find product from Zustand store
  useEffect(() => {
    if (productsZustand.length > 0) {
      const foundProduct = productsZustand.find(
        (p) => String(p._id) === String(id)
      );
      setProduct(foundProduct || null);
    }
  }, [productsZustand, id]);

  // Set main image when product changes
  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImg(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-black h-[100vh] flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 h-[100vh]">
      <div className="pt-10">
        {/* Main Product Image */}
        <div>
          {!animation && (
            <div className="w-[80vw] md:w-[40vw] rounded-xl h-[50vh] mx-auto">
              <img
                className={`object-cover w-full h-full rounded-xl ${
                  animation ? "animate-fadeIn duration-1000" : ""
                }`}
                src={mainImg}
                alt={product.productName}
              />
            </div>
          )}
          {/* ANIMATION DIV  */}
          {animation && (
            <div
              className={`w-0 bg-white ${
                animation && "w-[80vw]"
              } transition-all duration-700 md:w-[40vw] rounded-xl h-[50vh] mx-auto `}
            ></div>
          )}
        </div>
        {/* Thumbnails */}
        <div className="flex items-center justify-center w-[80vw] transition-all gap-5 mx-auto mt-5 rounded-xl">
          {product.images?.map((img, index) => (
            <div
              key={index}
              className={`w-32 h-32 rounded-xl cursor-pointer transition-all ${
                mainImg === img ? "shadow-[0_0_10px_purple]" : ""
              }`}
              onClick={() => {
                setMainImg(img);
                setAnimation(true);
                setTimeout(() => setAnimation(false), 2000);
              }}
            >
              <img
                className="object-cover rounded-xl w-full h-full"
                src={img}
                alt={product.productName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
