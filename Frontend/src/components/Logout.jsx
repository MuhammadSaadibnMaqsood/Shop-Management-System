import { User2Icon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const { mutate: logoutMutation, isPending, isError } = useLogout();
  function handleLogout() {
    logoutMutation();
  }

  return (
    <div className="absolute right-10 -mt-3 text-white">
      <button onClick={() => setshowDropDown((prev) => !prev)}>
        <User2Icon className="bg-white text-black p-1 rounded-full" />
      </button>

      {showDropDown && (
        <div className="absolute mt-2 right-0 bg-gray-800 text-white rounded-lg shadow-lg p-2 z-50">
          <Link to="/orders">
            <button onClick={() => setshowDropDown(false)}>
              <p className="cursor-pointer hover:bg-gray-700 p-2 mx-5 rounded">
                Orders
              </p>
            </button>
          </Link>
          <button
            onClick={() => {
              setshowDropDown(false);
              handleLogout();
            }}
          >
            <p className="cursor-pointer hover:bg-gray-700 p-2 mx-5 rounded">
              Logout
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
