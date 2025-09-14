import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listProduct } from "../lib/api";
const useListProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: listProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["allproducts"]);
    },
  });
};

export default useListProduct;
