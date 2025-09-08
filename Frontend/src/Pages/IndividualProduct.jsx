import React from "react";
import { useParams } from "react-router-dom";
import { dummyProducts } from "../../dummyData/Dummy";

const IndividualProduct = () => {
  const { id } = useParams();
  
  const product = dummyProducts.find((product)=> product.id === id);
  console.log(product);
  

  return <div>IndividualProduct</div>;
};

export default IndividualProduct;
