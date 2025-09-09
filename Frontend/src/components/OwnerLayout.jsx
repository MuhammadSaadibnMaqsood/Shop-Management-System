import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div>
      <h1>Owner Layout Loaded ✅</h1>
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
