import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { logout } from "../lib/api";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      if (data.success) {
        navigate("/");
      }
    },
  });
};

export default useLogout;
