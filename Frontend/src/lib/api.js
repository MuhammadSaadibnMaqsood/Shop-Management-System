import axiosInstance from "./axios";
import { toast } from "react-toastify"; // yeh zaroor add karna

// FETCH EXISTING USER
export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get("user/me");
    console.log("User fetched:", response.data);
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
      toast.success("Login successful ✅");
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
      toast.success("Login successful ✅");
      return response?.data;
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};
