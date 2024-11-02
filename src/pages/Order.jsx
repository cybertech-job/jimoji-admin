import React from 'react'
import { useLocation } from 'react-router-dom'
import OrderOne from '../components/order/OrderOne'

const Order = () => {
    

  return (
    <div className='p-6 lg:p-8  w-full relative  overflow-y-hidden hover:overflow-y-auto h-[85vh]  scrollbar-thin overflow-auto scrollbar-gutter-stable'>
      <OrderOne/>
    </div>
  )
}

export default Order