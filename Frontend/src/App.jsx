import React from "react";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import useAuthUser from "./hooks/useAuthUser";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Loading from "./components/loading";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import RegisterShop from "./Pages/RegisterShop";
import Dashboard from "./Pages/shopownerPages/Dashboard";
import About from "./Pages/About";
import Allproducts from "./Pages/Allproducts";
import IndividualProduct from "./Pages/IndividualProduct";
import CreateProduct from "./Pages/shopownerPages/CreateProduct";
import OwnerLayout from "./components/OwnerLayout";
import { Orders } from "./Pages/Orders";

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
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/products/:id" element={<IndividualProduct />} />
        <Route path="/registerShop" element={<RegisterShop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/owner" element={<OwnerLayout />}>
          {/* /owner pe Dashboard aaega */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
