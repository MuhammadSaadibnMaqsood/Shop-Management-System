import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../lib/api"; 

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false
  });

  return {
    isLoading: authUser.isLoading,
    user: authUser?.data || null,
    isError: authUser.isError,
    error: authUser.error
  };
};

export default useAuthUser;
