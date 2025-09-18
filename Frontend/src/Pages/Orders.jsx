import React, { useEffect } from 'react'
import useGetAllProducts from '../hooks/useGetAllProducts'

export const Orders = () => {

    const {data:orders, isloading, iserror} = useGetAllProducts();

    useEffect(()=>{
        console.log(orders);
        
    },[])
  return (
    <div className='min-h-[100vh] bg-zinc-950 text-white'>
        <div>

        </div>
    </div>
  )
}
