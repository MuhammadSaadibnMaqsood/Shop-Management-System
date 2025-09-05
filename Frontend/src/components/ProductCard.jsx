import React from "react";

const ProductCard = ({ productName, price, image, category }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h2>{productName}</h2> <span>price</span>
    </div>
  );
};

export default ProductCard;
