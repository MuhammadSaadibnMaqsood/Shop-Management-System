import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShop } from "../lib/api";
import { useNavigate } from "react-router-dom";

const useAddShop = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: addShop,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
      navigate("/dashboard");
    },
  });
};

export default useAddShop;
