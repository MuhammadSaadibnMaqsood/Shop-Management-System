import axiosInstance from "./axios";

//FETCH EXISTING USER
export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get("user/me");
    return response?.data;
  } catch (error) {
    if (err.response?.status === 401) {
      return null; // unauthorized → user not logged in
    }
    throw err;
  }
};

//LOGIN FUNCTION
export const Login = async (loginData) => {
  try {
    const response = await axiosInstance.post("user/login",loginData);
    return response?.data;
  } catch (error) {
    if (err.response?.status === 401) {
      return null; // unauthorized → user not logged in
    }
    throw err;
  }
};
