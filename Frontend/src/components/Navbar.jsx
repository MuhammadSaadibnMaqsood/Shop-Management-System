import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react"; // hamburger icon
import useLogout from "../hooks/useLogout";
import Logout from "./Logout";

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "All Products" },
  ];

  if (role === "shopowner") {
    navLinks.push({ path: "/owner/dashboard", label: "Dashboard" });
  } else if (role === "user") {
    navLinks.push({ path: "/registerShop", label: "Add Shop" });
  }
  // console.log(role);
  const { mutate: logoutMutation, isPending, isError } = useLogout();

  function handleLogout() {
    logoutMutation();
  }

  return (
    <header className="bebasFont bg-black text-white shadow-md sticky top-0 z-40">
      <nav className="flex justify-between w-full items-center p-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wider">
            <Link to="/">My-App</Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 
   hover:bg-gradient-to-r hover:from-[#ff0a7f] hover:to-[#780eff] hover:text-transparent hover:bg-clip-text
   ${isActive ? "border-b-2 border-purple-500" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <div className="hidden md:block">
          {!role && (
            <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <Link to="/login">
                <button class="px-8  cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800">
                  Login
                </button>
              </Link>
            </div>
          )}

          {role && (
            <div className="relative">
              <Logout />
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800">
          <ul className="flex flex-col items-center gap-6 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-300 transition"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {role ? null : (
              <li>
                <button className="bg-yellow-400 text-black font-semibold py-1 px-5 rounded-2xl hover:bg-yellow-300 transition">
                  <Link to={"/login"}>Login</Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
