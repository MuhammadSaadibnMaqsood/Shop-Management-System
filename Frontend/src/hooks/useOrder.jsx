import React from "react";
import { orderProduct } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useOrderModelStore from "../Zustand/OrderModelStore";


const useOrder = () => {
  const queryClient = useQueryClient();
  const { setOrderModel } = useOrderModelStore();

  return useMutation({
    mutationFn: orderProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["ownerProducts"]);
      queryClient.invalidateQueries(["allproducts"]);
      setOrderModel(false);
    },
  });
};

export default useOrder;
