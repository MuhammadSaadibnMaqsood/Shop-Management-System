import React, { useState } from "react";
import ListedItems from "./ListedItems";
import SoldItems from "../components/SoldItems";

export const Tabs = ({ ownerProducts }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="w-full bg-zinc-950">
      <div className=" border border-black flex gap-3 mt-10">
        <div className="flex">
          <input
            type="radio"
            id="dashboard"
            name="tabs"
            className="hidden"
            checked={activeTab === "dashboard"}
            onChange={() => setActiveTab("dashboard")}
          />
          <label
            htmlFor="dashboard"
            className={`w-40 cursor-pointer rounded-xl text-center py-2 ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-gray-400"
            }`}
          >
            Dashboard
          </label>
        </div>

        <div className="flex ">
          <input
            type="radio"
            id="sold"
            name="tabs"
            className="hidden"
            checked={activeTab === "sold"}
            onChange={() => setActiveTab("sold")}
          />
          <label
            htmlFor="sold"
            className={`w-40 cursor-pointer rounded-xl text-center py-2 ${
              activeTab === "sold"
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-gray-400"
            }`}
          >
            Sold Products
          </label>
        </div>
      </div>

      {activeTab === "dashboard" ? (
        <ListedItems ownerProducts={ownerProducts} />
      ) : (
        <SoldItems />
      )}
    </div>
  );
};

export default Tabs;
