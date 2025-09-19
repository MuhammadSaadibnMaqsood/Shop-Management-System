import { useQuery } from "@tanstack/react-query";
import { getSoldItems } from "../lib/api";

const useGetSoldItems = () => {
  return useQuery({
    queryKey: ["soldItems"],   
    queryFn: getSoldItems,
  });
};

export default useGetSoldItems;
