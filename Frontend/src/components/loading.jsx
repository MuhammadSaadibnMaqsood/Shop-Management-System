import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen gap-5 flex flex-col justify-center text-white items-center bg-black">
      <img src="/shoe3.jpg" alt="" className="h-[30%] w-[30%] animate-pulse rounded-full"/>
      <Loader className="animate-spin w-10 h-10"/>
    </div>
  );
};

export default Loading;
