import React from "react";
import { useMutation } from "@tanstack/react-query";
import { listProduct } from "../lib/api";
const useListProduct = () => {
  return useMutation({
    mutationFn: listProduct,
  });
};

export default useListProduct;
