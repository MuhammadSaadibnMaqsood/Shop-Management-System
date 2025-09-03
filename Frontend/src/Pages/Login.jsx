import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { mutate: loginMutation, isPending, error } = useLogin();

  function handleClick() {
    loginMutation(loginData);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[90%] md:w-[70%] h-[55vh] md:h-96 shadow-2xl rounded-2xl flex overflow-hidden"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full  md:w-1/2 flex flex-col justify-center gap-6 h-full p-8 bg-white"
        >
          <h1 className="text-center text-6xl md:text-4xl tekturFont font-bold text-gray-800">
            Login
          </h1>

          {/* EMAIL INPUT */}
          <div className="relative w-full flex items-center gap-2">
            <img className="h-7 w-7" src="/user.gif" alt="" />
            <div className="w-full relative">
              <input
                type="email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
                className="peer w-full border border-gray-400 px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder=" "
              />
              <label className="absolute left-3 top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
                Email
              </label>
            </div>
          </div>

          {/* PASSWORD INPUT */}
          <div className="relative w-full flex items-center gap-2">
            <img className="w-7 h-7" src="/password.gif" alt="" />
            <div className="relative w-full">
              <input
                type="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
                className="peer w-full border border-gray-400 px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder=" "
              />
              <label className="absolute left-3 top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
                Password
              </label>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <div className="flex justify-center pt-3">
            {/* <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black cursor-pointer text-white py-2 w-40 rounded-xl shadow-lg hover:bg-gray-800 transition"
            >
              {isPending ? "Logging in..." : "Login"}
            </motion.button> */}
            <motion.div
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              class="rainbow  relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"
            >
              <button class="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800">
                {isPending ? "Logging in..." : "Login"}
              </button>
            </motion.div>
          </div>

          {/* MOBILE SIGNUP LINK */}
          <div className="pt-6 text-center block md:hidden">
            <span className="text-gray-400">Don't have an account?</span>{" "}
            <Link
              to={"/signup"}
              className="text-blue-400 cursor-pointer hover:text-blue-500 font-semibold"
            >
              Signup
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-1/2 h-full hidden bg-black text-white p-8 md:flex flex-col justify-center"
        >
          <h1 className="text-center tekturFont sm:text-2xl md:text-3xl text-3xl font-bold tracking-wide">
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
              className="text-blue-400 cursor-pointer hover:text-blue-500 font-semibold"
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
