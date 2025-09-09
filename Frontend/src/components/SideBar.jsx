import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-64 h-[90vh] bg-zinc-950 border-r border-gray-800 p-5">
      <div>
        <button
        onClick={()=> navigate('/dashboard')}
          className={`w-full border-b border-pink-300 cursor-pointer hover:scale-105 transition-all duration-700 text-white h-14 rounded-2xl ${
            location.pathname === "/dashboard" ? "border-purple-900" : "bg-black"
          }`}
        >
          DASHBOARED
        </button>
        <button
        onClick={()=> navigate('/createproduct')}
          className={`w-full border-b pt-3 mt-5 border-pink-300 cursor-pointer hover:scale-105 transition-all duration-700 text-white h-14 rounded-2xl ${
            location.pathname === "/createproduct" ? "bg-amber-900" : "bg-black"
          }`}
        >
            LIST PRODUCT
        </button>
      </div>
    </div>
  );
};

export default SideBar;
