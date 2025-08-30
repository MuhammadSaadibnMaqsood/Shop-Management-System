import { Login } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const useLoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
 return useMutation({
  mutationFn: Login,
  onSuccess: () => { 
    queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/");
  },
});
}
export default useLoginMutation;