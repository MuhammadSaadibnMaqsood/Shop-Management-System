import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ownerProduct } from "../lib/api";
const useGetOwnerProducts = () => {
  return useQuery({
    queryKey: ["ownerProducts"],
    queryFn: ownerProduct,
  });
};

export default useGetOwnerProducts;
