import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getProducts } from '../lib/api'
const useGetAllProducts = () => {
  return useQuery({
    queryKey:["allproducts"],
    queryFn:getProducts
  })
}

export default useGetAllProducts