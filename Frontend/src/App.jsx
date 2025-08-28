import React from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthUser from "./hooks/useAuthUser";
import Navbar from "./components/Navbar";
import Home from "../Pages/Home";
import Loading from "./components/loading";
import Login from "../Pages/Login";
function App() {
  const { isLoading, user, isError, error } = useAuthUser();
  const role = user?.role;

  if (isLoading) return <Loading/>;
  const location = window.location.pathname;
  if(location === "/login" || location === "Signup")

  return (
    <>
      {location !== 'login' || location !== "signup"  && <Navbar role={role} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
