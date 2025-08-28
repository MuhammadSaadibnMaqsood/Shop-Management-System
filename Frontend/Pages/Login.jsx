import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[70%] h-96 shadow-2xl rounded-2xl flex overflow-hidden"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-1/2 flex flex-col justify-center gap-6 h-full p-8 bg-white"
        >
          <h1 className="text-center text-4xl tekturFont font-bold text-gray-800">
            Login
          </h1>

          {/* EMAIL INPUT */}
          <div className="relative w-full">
            <input
              type="email"
              required
              className="peer w-full border border-gray-400 px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder=" "
            />
            <label className="absolute left-3 top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
              Email
            </label>
          </div>

          {/* PASSWORD INPUT */}
          <div className="relative w-full">
            <input
              type="password"
              required
              className="peer w-full border border-gray-400 px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder=" "
            />
            <label className="absolute left-3 top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
              Password
            </label>
          </div>

          {/* LOGIN BUTTON */}
          <div className="flex justify-center pt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white py-2 w-40 rounded-xl shadow-lg hover:bg-gray-800 transition"
            >
              Login
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-1/2 h-full bg-black text-white p-8 flex flex-col justify-center"
        >
          <h1 className="text-center text-3xl font-bold tracking-wide">
            Welcome Back 👋
          </h1>
          <p className="pt-8 text-justify leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            neque dolorum doloribus nobis. Eius harum numquam porro nam
            accusamus facilis dolore quae. 💫
          </p>

          <div className="pt-6 text-center">
            <span className="text-gray-400">Don't have an account?</span>{" "}
            <Link
              to={"/signup"}
              className="text-blue-400 hover:text-blue-500 font-semibold"
            >
              Signup
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
