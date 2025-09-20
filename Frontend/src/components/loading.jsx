import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Image with smooth animation */}
      <img
        src="/shoe3.jpg"
        alt="loading"
        className="h-[25%] w-[80%] md:h-[50%] md:w-[30%] object-cover rounded-full shadow-lg animate-pulse"
      />

      {/* Loader with glow effect */}
      <div className="flex items-center gap-3 mt-6">
        <Loader className="animate-spin w-8 h-8  drop-shadow-md" />
        <span className="text-lg font-medium animate-pulse ">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
