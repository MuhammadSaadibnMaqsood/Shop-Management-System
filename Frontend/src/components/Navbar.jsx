import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react" // hamburger icon

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "All Products" },
  ]

  if (role === "shopowner") {
    navLinks.push({ path: "/dashboard", label: "Dashboard" })
  }

  return (
    <header className="bebasFont bg-transparent  text-white shadow-md relative z-50">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
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
                  `hover:text-yellow-300 cursor-pointer transition duration-300 ${
                    isActive ? "border-b-2 border-yellow-400" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="bg-yellow-400 text-black font-semibold cursor-pointer py-1 px-5 rounded-2xl hover:bg-yellow-300 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
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
            <li>
              <button className="bg-yellow-400 text-black font-semibold py-1 px-5 rounded-2xl hover:bg-yellow-300 transition">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
