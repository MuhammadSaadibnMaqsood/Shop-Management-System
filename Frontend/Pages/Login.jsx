import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center w-[100%] items-center h-screen">
      <div className="w-[70%] h-80 shadow-2xl rounded-lg flex justify-center items-center">
        {/* LEFTSIDE  */}
        <div className="w-[50%] flex flex-col  justify-center gap-4 h-full p-4">
          <h1 className="text-center text-4xl tekturFont ">Login</h1>
          <div className="flex flex-col relative pt-5">
            <label htmlFor="" className="absolute top-2 pl-2">
              Email
            </label>
            <input
              className="border border-black px-2 py-1 rounded"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col relative pt-5">
            <label htmlFor="" className="absolute top-2 pl-2">
              Password
            </label>
            <input
              className="border border-black px-2 py-1 rounded"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex justify-center pt-5">
            <button className="bg-black text-white p-2 w-40 rounded">Login</button>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className="w-[50%] h-full bg-black text-white p-4">
          <div>
            <h1 className="text-center">Welcome Back</h1>
            <p className="pt-8 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              neque dolorum doloribus nobis. Eius harum numquam porro nam
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
