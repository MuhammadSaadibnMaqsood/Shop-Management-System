import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../Zustand/useProducts";

const IndividualProduct = () => {
  const { id } = useParams();
  const { productsZustand } = useProductStore();

  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [overlay, setOverlay] = useState(false); // white div animation

  // Find product from Zustand
  useEffect(() => {
    if (productsZustand.length > 0) {
      const foundProduct = productsZustand.find(
        (p) => String(p._id) === String(id)
      );
      setProduct(foundProduct || null);
    }
  }, [productsZustand, id]);

  // Set first image as default
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
    <div className="bg-zinc-950 h-[100vh]">
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
      </div>
    </div>
  );
};

export default IndividualProduct;
