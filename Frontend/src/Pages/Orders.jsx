import React, { useEffect } from 'react'
import useGetOrders from '../hooks/useGetOrders';

export const Orders = () => {

    const {data:orders, isloading, iserror} = useGetOrders();
    
    console.log(orders);
    

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
