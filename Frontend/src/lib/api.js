import axiosInstance from "./axios";

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
