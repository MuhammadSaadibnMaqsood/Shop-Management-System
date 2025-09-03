import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { mutate: signupMutation, isPending, error } = useSignup();

  function handleClick() {
    signupMutation(signupData);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <motion.div className="w-[90%] md:w-[70%] h-[55vh] md:h-96 shadow-2xl rounded-2xl flex overflow-hidden">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 h-full hidden bg-black text-white p-8 md:flex flex-col justify-center"
        >
          <h1 className="text-center tekturFont sm:text-2xl md:text-3xl text-3xl font-bold tracking-wide">
            Welcome to My-App 🚀
          </h1>
          <p className="pt-8 text-justify leading-relaxed text-gray-300">
            Join us today and explore amazing features. Create your account and
            start your journey now! 💫
          </p>

          <div className="pt-6 text-center">
            <span className="text-gray-400">Already have an account?</span>{" "}
            <Link
              to={"/login"}
              className="text-blue-400 cursor-pointer hover:text-blue-500 font-semibold"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-center gap-6 h-full p-8 bg-white"
        >
          <h1 className="text-center text-6xl md:text-4xl tekturFont font-bold text-gray-800">
            Signup
          </h1>

          {/* USERNAME INPUT */}
          <div className="relative flex items-center w-full gap-2">
            <img className="w-7 h-7" src="/user.gif" alt="user" />
            <div className="w-full relative">
              <input
                type="text"
                onChange={(e) =>
                  setSignupData({ ...signupData, userName: e.target.value })
                }
                required
                className="peer w-full border border-gray-400 px-3 pt-5 pb-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder=" "
              />
              <label className="absolute left-3 top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
                Username
              </label>
            </div>
          </div>

          {/* EMAIL INPUT */}
          <div className="relative flex items-center gap-2 w-full">
            <img  className="w-7 h-7" src="/email.gif" alt="password gif" />
            <div className="w-full relative">
              <input
                type="email"
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
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
          <div className="relative flex items-center gap-2 w-full">
            <img className="w-7 h-7" src="/password.gif" alt="password.gif" />
            <div className="w-full relative">
              <input
                type="password"
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
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

          {/* SIGNUP BUTTON */}
          <div className="flex justify-center pt-3">
            {/* <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black cursor-pointer text-white py-2 w-40 rounded-xl shadow-lg hover:bg-gray-800 transition"
            >
              {isPending ? "Signing up..." : "Signup"}
            </motion.button> */}

            <motion.div
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              class="rainbow  relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"
            >
              <button class="px-8 cursor-pointer text-sm py-3 text-white rounded-full font-medium bg-gray-800">
                {isPending ? "Signing up..." : "Signup"}
              </button>
            </motion.div>
          </div>

          {/* MOBILE LOGIN LINK */}
          <div className="pt-6 text-center block md:hidden">
            <span className="text-gray-400">Already have an account?</span>{" "}
            <Link
              to={"/login"}
              className="text-blue-400 cursor-pointer hover:text-blue-500 font-semibold"
            >
              Login
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
