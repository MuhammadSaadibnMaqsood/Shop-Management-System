import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerLayout;
