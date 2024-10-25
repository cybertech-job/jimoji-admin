import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";


const OrderProduct = () => {

    const products = [
        { id: '#25421', name: 'Lorem Ipsum', quantity: 2, total: '₹800.40' },
        { id: '#25421', name: 'Lorem Ipsum', quantity: 2, total: '₹800.40' },
        { id: '#25421', name: 'Lorem Ipsum', quantity: 2, total: '₹800.40' },
        { id: '#25421', name: 'Lorem Ipsum', quantity: 2, total: '₹800.40' },
      ];
    
      const summary = {
        subtotal: '₹3,201.6',
        tax: '₹640.32',
        discount: '₹0',
        shipping: '₹0',
        total: '₹3841.92',
      };
    
  return (
    <section className="p-6 mt-6 bg-white rounded-lg shadow-md">

        <div className='flex justify-between p-3'>
            <h1 className='text-[20px] font-semibold'>Product</h1>
            <span><BiDotsVerticalRounded className='cursor-pointer' />
            </span>
        </div>

        <div className="overflow-x-auto ">
        <table className="w-full text-left space-y-4">
                <thead>
                    <tr className="text-gray-600 border-t">
                    <th className="p-3 font-semibold text-[14px]">Product Name</th>
                    <th className="p-3 font-semibold text-[14px]">Order ID</th>
                    <th className="p-3 font-semibold text-center text-[14px]">Quantity</th>
                    <th className="p-3 font-semibold text-[14px] text-right">Total</th>
                    </tr>
                </thead>
                <tbody className="bg-transparent">
                    {products.map((product, index) => (
                    <tr key={index} className="border-b border-t">
                        <td className="p-3 flex items-center space-x-2">
                        <input type="checkbox" />
                        <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
                        <span className="text-sm ">{product.name}</span>
                        </td>
                        <td className="p-3 text-sm">{product.id}</td>
                        <td className="p-3 text-center text-sm">{product.quantity}</td>
                        <td className="p-3 text-sm text-right">{product.total}</td> 
                    </tr>
                    ))}
                    
                </tbody>
                </table>

      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <div className="grid grid-cols-2 justify-items-end text-gray-600">
          <div className="flex flex-col text-[16px] mr-[-400px] space-y-4">
            <span>Subtotal</span>
            <span>Tax (20%)</span>
            <span>Discount</span>
            <span>Shipping Rate</span>
          </div>
          <div className="grid grid-cols justify-items-end space-y-2 text-[16px] text-right">
            <span>{summary.subtotal}</span>
            <span>{summary.tax}</span>
            <span>{summary.discount}</span>
            <span>{summary.shipping}</span>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-2 gap-8 justify-items-end font-bold text-lg">
          <span className='mr-[-370px] text-[24px] font-semibold'>Total</span>
          <span className='text-[24px] font-semibold'>{summary.total}</span>
        </div>
      </div>
        
    </section>
  )
}

export default OrderProduct