import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerLayout;
