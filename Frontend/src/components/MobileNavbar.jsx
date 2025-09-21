import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNavbar = ({navLinks,role}) => {
  return (
    <div>
         <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-15 min-h-screen flex items-center justify-center z-50 w-full bg-zinc-900"
        >
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
            {role ? (
              <div>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </div>
            ) : null}

            {role ? null : (
              <li>
                <button className="bg-yellow-400 text-black font-semibold py-1 px-5 rounded-2xl hover:bg-yellow-300 transition">
                  <Link to={"/login"}>Login</Link>
                </button>
              </li>
            )}
          </ul>
        </motion.div>
    </div>
  )
}

export default MobileNavbar