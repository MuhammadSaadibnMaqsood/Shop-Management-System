import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyProducts } from "../../dummyData/Dummy";

const IndividualProduct = () => {
  const { id } = useParams();

  const product = dummyProducts.find((product) => product._id === id);

  // useEffect(() => {
  //   console.log(product);
  // }, [product]);

  return (
    <div className="bg-zinc-950 h-[100vh]">
      <div className="pt-10">
        <div className="bg-white w-[80vw] md:w-[40vw] rounded-xl h-[50vh] mx-auto">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={product.images[0]}
            alt={product.productName}
          />
        </div>
        <div className="flex items-center justify-center w-[80vw] gap-5 mx-auto mt-5 rounded-xl">
          {product.images.slice(1).map((img) => (
            <div className="w-40 h-40 rounded-xl bg-white">
              <img
                className="object-cover cursor-pointer rounded-xl w-full h-full"
                src={img}
                alt={product.productName}
              />
            </div>
          ))}
          {/* <div className="w-40 h-40 rounded-xl bg-white"><img className="object-cover rounded-xl w-full h-full" src={product.images[2]} alt="" /></div>
      <div className="w-40 h-40 rounded-xl bg-white"><img className="object-cover rounded-xl w-full h-full" src={product.images[3]} alt="" /></div> */}
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
