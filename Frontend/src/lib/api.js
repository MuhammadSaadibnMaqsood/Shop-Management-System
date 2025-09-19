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
    console.log("call ae");

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
export const listProduct = async (formData) => {
  try {
    const response = await axiosInstance.post("product/create", formData);
    console.log(response);

    if (response?.data?.product) {
      toast.success("Product listed successfully");
    }
    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
    console.log(error);
  }
};
// LIST PRODUCT
export const ownerProduct = async () => {
  try {
    const response = await axiosInstance.get("product/ownerproducts");
    // console.log(response);

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
    console.log(error);
  }
};
// ORDER PRODUCT
export const orderProduct = async ({ orderData, id }) => {
  try {
    console.log("Product ID:", id);

    const response = await axiosInstance.post(
      `booking/create-booking/${id}`,
      orderData
    );

    if (response?.data?.message) {
      toast.success(response?.data?.message);
    }

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
    console.log(error);
  }
};
//GET ORDERS
export const getOrders = async () => {
  try {
    const response = await axiosInstance.get("/booking/getBookings");
    return response?.data?.orders;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
    console.log(error);
  }
};

// OWNER SOLD ITEMS

export const getSoldItems = async () => {
  try {
    const response = await axiosInstance.get("/product/getsoldproducts");

    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
    console.log(error);
  }
};

// CHANGE STATUS

export const changePaymentStatus = async (id) => {
  try {
    const response = await axiosInstance.post("/booking/paymentstatus",id);
    console.log(response);

    if (response.data.success) {
      toast.success("Payment status changed");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
    console.log(error);
  }
};
