import React, { useState } from "react";

const RegisterShop = () => {
  shopName, address, phone, description;
  const [shopDetails, setShopDetails] = useState({
    shopName: null,
    address: null,
    phone: null,
    description: null,
  });

  function handleSubmit() {}
  return (
    <div className="text-white bg-zinc-950 h-screen w-full ">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="p-10 text-center text-6xl AsimovianFont font-bold">
          Registor your shop
        </h1>
        <img
          className="rounded-full w-40 h-40"
          src="/shop-sign.gif"
          alt="shop-sign"
        />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) =>
              setShopDetails({ ...shopDetails, shopName: e.target.value })
            }
            type="text"
            required={true}
          />
          <input
            onChange={(e) =>
              setShopDetails({ ...shopDetails, address: e.target.value })
            }
            type="text"
            required={true}
          />
          <input
            onChange={(e) =>
              setShopDetails({ ...shopDetails, phone: e.target.value })
            }
            type="number"
            required={true}
          />
          <input
            onChange={(e) =>
              setShopDetails({ ...shopDetails, description: e.target.value })
            }
            type="text"
            required={true}
          />

          <button type="submit">Add shop</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterShop;
