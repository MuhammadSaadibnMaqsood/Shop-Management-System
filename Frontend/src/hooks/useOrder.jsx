import React from "react";
import { orderProduct } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["ownerProducts"]);
      queryClient.invalidateQueries(["allproducts"]);
    },
  });
};

export default useOrder;
