import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Signup } from "../lib/api";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Signup,
    onSuccess: (data) => {

        if (data.success) {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            navigate("/");
            
        }
    },
  });
};

export default useSignup;
