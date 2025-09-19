import React from "react";
import { getSoldItems } from "../lib/api";
import {useQuery} from '@tanstack/react-query'

const useGetSoldItems = () => {
  return useQuery({
    queryFn: getSoldItems,
  });
};

export default useGetSoldItems;
