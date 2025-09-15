import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  

  const navigate = useNavigate();

  return (
    <div className="w-64 h-full bg-zinc-950 border-r border-gray-800 p-5">
      <div>
        <button
          onClick={() => navigate("dashboard")}
          className={`w-full border-b border-pink-300 cursor-pointer hover:scale-105 transition-all duration-700 text-white h-14 rounded-2xl ${
            location.pathname === "/owner/dashboard"
              ? "border-purple-900"
              : "border-pink-300"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("createproduct")}
          className={`w-full border-b pt-3 mt-5 border-pink-300 cursor-pointer hover:scale-105 transition-all duration-700 text-white h-14 rounded-2xl ${
            location.pathname === "/owner/createproduct"
              ? "border-purple-900"
              : "border-pink-300"
          }`}
        >
          List product
        </button>
      </div>
    </div>
  );
};

export default SideBar;
