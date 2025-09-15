import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductsSection = ({ cardData }) => {
  const [stopScroll, setStopScroll] = useState(false);

  if (cardData) {
    console.log(cardData);
    
  }
  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div
        className="overflow-hidden w-full relative max-w-[70%] mx-auto "
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <Link to={`${card._id}`}>
                <div
                  key={index}
                  className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"
                >
                  <img
                    src={card.images[0]}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center flex-col justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                    <p className="text-white text-lg font-semibold text-center">
                      {card.productName}
                    </p>
                    <p className="text-white text-lg font-semibold text-center">
                      Price: <b>{card.price}Rs</b>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-transparent" />
      </div>
    </>
  );
};

export default ProductsSection;
