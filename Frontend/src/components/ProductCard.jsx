import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ productId, productName, price, image, category }) => {
  return (
    <Link to={`${productId}`}>
      <div className="group m-5 w-52 h-64 [perspective:1000px] cursor-pointer">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* <!-- Front Side --> */}
          <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-white border border-gray-200">
            <img
              src={image}
              alt={productName}
              className="w-full h-full object-cpver rounded-md"
            />
          </div>

          {/* <!-- Back Side --> */}
          <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-indigo-600 text-white [transform:rotateY(180deg)]">
            <div>
              <h2 className="text-center">{productName}</h2>
              <p className="text-center">{price}Rs</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
