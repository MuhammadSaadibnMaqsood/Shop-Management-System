import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getOrders } from '../lib/api'

const useGetOrders = () => {
  return useQuery({
    queryFn:getOrders,
  })
}

export default useGetOrders