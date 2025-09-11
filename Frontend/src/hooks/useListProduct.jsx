import React from "react";
import { useMutation } from "@tanstack/react-query";
const useListProduct = () => {
  return useMutation({
    mutationFn: list,
  });
};

export default useListProduct;
