import axiosInstance from "./axios";
import { toast } from "react-toastify"; // yeh zaroor add karna

// FETCH EXISTING USER
export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get("user/me");
    // console.log("User fetched:", response.data);
    return response?.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return null;
    }
  }
};

// LOGIN FUNCTION
export const Login = async (loginData) => {
  try {
    const response = await axiosInstance.post("user/login", loginData);

    if (response.data) {
      toast.success("Login successfull");
      return response?.data;
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};

// SIGNUP FUNCTION
export const Signup = async (signupData) => {
  try {
    const response = await axiosInstance.post("user/signup", signupData);

    if (response.data) {
      toast.success("Signup successfull");
      return response?.data;
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};

// LOUGOUT FUNCTION
export const logout = async () => {
  try {
    const response = await axiosInstance.post("user/logout");

    if (
      response?.data?.message === "Logged out successfully" ||
      response.data.success
    ) {
      toast.success("Logout successfully");
    }

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};

// REGISTOR SHOP
export const addShop = async (shopDetails) => {
  try {
    const response = await axiosInstance.post("shop/create", shopDetails);
    // console.log(response);

    if (response?.data.message === "Shop created successfully") {
      toast.success(response.data.message);
    }

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};

// GET ALL PRODUCTS
export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("product/allproducts");
    // console.log(response);

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};


// LIST PRODUCT
export const listProduct = async () => {
  try {
    const response = await axiosInstance.get("product/allproducts");
    // console.log(response);

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};
