import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addShop } from "../lib/api";

const useAddShop = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addShop,
    onSuccess: queryClient.invalidateQueries(["user"]),
  });
};

export default useAddShop;
