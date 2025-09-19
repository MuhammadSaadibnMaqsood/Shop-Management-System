import React from "react";
import { changePaymentStatus } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useChangeStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changePaymentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["soldItems"] });
      queryClient.invalidateQueries({ queryKey: ["getOrders"] });
    },
  });
};

export default useChangeStatus;
