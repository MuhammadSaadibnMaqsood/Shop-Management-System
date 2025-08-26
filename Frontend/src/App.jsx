import React from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthUser from "./hooks/useAuthUser";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "../Pages/Home";

function App() {
  const { isLoading, user, isError, error } = useAuthUser();
  const role = user?.role;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
