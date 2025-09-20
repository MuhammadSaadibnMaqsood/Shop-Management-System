import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dislist } from "../lib/api";
import { toast } from "react-toastify";

export const useDislisrProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: dislist,
    onSuccess: () => {
      toast.success("Item dislisted");
      queryClient.invalidateQueries(["ownerProducts"]);
      queryClient.invalidateQueries(["allproducts"]);
      queryClient.invalidateQueries(["soldItems"]);
    },
  });
};
