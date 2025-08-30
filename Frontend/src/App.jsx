import React from "react";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom"; // 👈 useLocation import
import useAuthUser from "./hooks/useAuthUser";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Loading from "./components/loading";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoading, user } = useAuthUser();
  const role = user?.user?.role;

  const location = useLocation();

  if (isLoading) return <Loading />;

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Navbar sirf tab show hoga jab login/signup page na ho */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar role={role} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
