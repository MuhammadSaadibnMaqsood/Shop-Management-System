import React from "react";

const useOrder = () => {
  const queryClient = useQuery();
  return useMuatation({
    mutationFn: orderProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["ownerProducts"]);
      queryClient.invalidateQueries(["allproducts"]);
    },
  });
};

export default useOrder;
