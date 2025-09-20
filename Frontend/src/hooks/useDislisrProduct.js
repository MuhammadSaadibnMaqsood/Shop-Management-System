import React from 'react'
import {useMutation,useQueryClient} from '@tanstack/react-query';
import { dislist } from '../lib/api';

export const useDislisrProduct = () => {

    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:dislist,
    onSuccess:()=>{
        queryClient.invalidateQueries(["ownerProducts"]);
        queryClient.invalidateQueries(["allproducts"]);
        queryClient.invalidateQueries(["soldItems"]);
    }
  })
}
