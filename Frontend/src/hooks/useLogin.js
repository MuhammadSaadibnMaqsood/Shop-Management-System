import { Login } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
const useLoginMutation = () => {
  const queryClient = useQueryClient();
 return useMutation({
  mutationFn: Login,
  onSuccess: () => { 
    queryClient.invalidateQueries({ queryKey: ["user"] });
    toast.success("Login successfully");
  },
});
}
export default useLoginMutation;