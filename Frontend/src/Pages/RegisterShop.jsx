import React, { useState } from "react";
import useAddShop from "../hooks/useAddShop";
import { motion } from "framer-motion";
const RegisterShop = () => {
  const [shopDetails, setShopDetails] = useState({
    shopName: null,
    address: null,
    phone: null,
    description: null,
  });

  const { mutate: addShopMutation, isPending, isError } = useAddShop();

  function handleSubmit(e) {
    e.preventDefault();
    addShopMutation(shopDetails);
  }

  return (
    <div className="text-white bg-zinc-950 h-screen w-full ">
      <div className="flex flex-col items-center justify-center ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-center group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-5xl sm:text-6xl md:text-7xl AsimovianFont font-bold tracking-widest relative"
        >
          Registor Your Shop
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="hidden md:block group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-5xl sm:text-6xl md:text-7xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
          >
            Registor Your Shop
          </motion.span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="flex p-10 mt-10 items-center  justify-center gap-2"
      >
        <div className="h-[45vh] lg:h-[55vh] w-[90vw] lg:w-[40vw] form-shadow  ">
          <form
            onSubmit={handleSubmit}
            className="flex p-10 relative z-50 flex-col space-y-8 items-center justify-center"
          >
            {/* Shop Name */}
            <div className="flex flex-col relative w-full lg:w-1/2 ">
              <input
                id="shopName"
                className="peer cursor-pointer border-b rounded-2xl h-10 p-5 text-white bg-transparent placeholder-transparent focus:outline-none"
                placeholder="Shop name"
                onChange={(e) =>
                  setShopDetails({ ...shopDetails, shopName: e.target.value })
                }
                type="text"
                required
              />
              <label
                htmlFor="shopName"
                className="absolute cursor-pointer left-5 top-2 text-gray-400 transition-all 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-clip-text peer-focus:text-transparent peer-focus:bg-gradient-to-r from-[#c6005c] to-[#4a00b8]"
              >
                Shop name
              </label>
            </div>

            {/* Address */}
            <div className="flex flex-col relative w-full md:w-1/2">
              <input
                id="address"
                className="peer cursor-pointer border-b rounded-2xl h-10 p-5 text-white bg-transparent placeholder-transparent focus:outline-none"
                placeholder="Address"
                onChange={(e) =>
                  setShopDetails({ ...shopDetails, address: e.target.value })
                }
                type="text"
                required
              />
              <label
                htmlFor="address"
                className="absolute left-5 top-2 cursor-pointer text-gray-400 transition-all 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-clip-text peer-focus:text-transparent peer-focus:bg-gradient-to-r from-[#c6005c] to-[#4a00b8]"
              >
                Address
              </label>
            </div>

            {/* Phone */}
            <div className="flex flex-col relative w-full md:w-1/2">
              <input
                id="phone"
                className="peer cursor-pointer border-b rounded-2xl h-10 p-5 text-white bg-transparent placeholder-transparent focus:outline-none"
                placeholder="Phone"
                onChange={(e) =>
                  setShopDetails({ ...shopDetails, phone: e.target.value })
                }
                type="number"
                required
              />

              <label
                htmlFor="phone"
                className="absolute left-5 top-2 text-gray-400 cursor-pointer transition-all 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-clip-text peer-focus:text-transparent peer-focus:bg-gradient-to-r from-[#c6005c] to-[#4a00b8]"
              >
                Phone
              </label>
            </div>

            {/* Description */}
            <div className="flex flex-col relative w-full md:w-1/2">
              <input
                id="description"
                className="peer cursor-pointer border-b rounded-2xl h-10 p-5 text-white bg-transparent placeholder-transparent focus:outline-none"
                placeholder="Description"
                onChange={(e) =>
                  setShopDetails({
                    ...shopDetails,
                    description: e.target.value,
                  })
                }
                type="text"
                required
              />
              <label
                htmlFor="description"
                className="absolute left-5 top-2 text-gray-400 transition-all cursor-pointer
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
               peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-clip-text peer-focus:text-transparent peer-focus:bg-gradient-to-r from-[#c6005c] to-[#4a00b8]"
              >
                Description
              </label>
            </div>
            <div class="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button class="px-8  cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800">
                {isPending ? "Adding..." : "Add Shop"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterShop;
