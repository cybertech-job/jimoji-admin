import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlinePrinter } from "react-icons/hi";
import image from "../../assets/MastercardLogo.png"
import OrderProduct from './OrderProduct';

const OrderDetails = () => {
  return (
    <section className='p-6'>
        <div>
            <h1 className='text-[24px] font-semibold'>Orders Details</h1>
            <h3 className='text-[16px] font-[400]'>Home &gt; Order List &gt; Order Details</h3>
        </div>

        {/* first container */}
        <div className=' p-6 bg-white mt-9 rounded-xl'>
            <div className='flex  justify-between'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-10'><h1  className='text-[24px] font-semibold'>Orders ID: #6743</h1> <div className='flex  rounded-xl justify-center items-center font-semibold w-[71px] h-[32px] text-[12px] bg-[#FFA52F]'>Pending</div> </div>
                    <span className='flex gap-2'> <IoCalendarOutline className="text-[24px] mt- cursor-pointer" />  <h4 className='text-[16px] font-[400]'>Feb 16,2022 - Feb 20,2022</h4> </span> 
                </div>

                <div className='flex gap-4'>
                    <div className=' flex bg-[#F4F2F2] w-[219px] h-[52px] rounded-xl justify-between p-3 items-center  '>
                        <p className='text-[14px]'>Change Status</p>
                        <IoChevronDown />
                    </div>
                    <button className='bg-[#F4F2F2] w-[58px] h-[52px] rounded-xl flex justify-center items-center'><HiOutlinePrinter className='text-[28px]' /></button>
                    <button className='bg-[#F4F2F2] w-[58px] h-[52px] text-[14px] font-semibold rounded-xl flex justify-center items-center'>Save</button>
                </div>
            </div>

            {/* first of second container */}

            <div className='flex gap-4'>
                <div className='border-[0.1389vw] mt-9 w-[348px] h-[194px] rounded-xl p-5'>
                    <div className='flex gap-3'>
                        <span className=' w-[56px] h-[56px] bg-[#232321] flex items-center justify-center rounded-xl '><IoPersonOutline className='text-white text-[28px]' />
                        </span>

                        <div className=' leading-8 '>
                            <h1 className='text-[20px] font-semibold'>Customer</h1>
                            <p className='text-[#70706E]'>Full Name: Shristi Singh</p>
                            <p className='text-[#70706E]'>Email: shristi@gmail.com</p>
                            <p className='text-[#70706E]'>Phone: +91 904 231 1212</p>
                        </div>
                    </div>
                    <button className='bg-[#003F62] text-white w-full rounded-md'>View profile</button>
                </div>

                    {/* second of second container */}
                <div className='border-[0.1389vw] mt-9 w-[348px] h-[194px] rounded-xl p-5'>
                    <div className='flex gap-3'>
                        <span className=' w-[56px] h-[56px] bg-[#232321] flex items-center justify-center rounded-xl '><IoBagHandleOutline className='text-white text-[28px]' />
                        </span>

                        <div className=' leading-8 '>
                            <h1 className='text-[20px] font-semibold'>Order Info</h1>
                            <p className='text-[#70706E]'>Shipping: Next express</p>
                            <p className='text-[#70706E]'>Payment Method: Paypal</p>
                            <p className='text-[#70706E]'>Status: Pending</p>
                        </div>
                    </div>
                    <button className='bg-[#003F62] text-white w-full rounded-md'>Download info</button>
                </div>

                {/* third of second container */}
                <div className='border-[0.1389vw] mt-9 w-[348px] h-[194px] rounded-xl p-5'>
                    <div className='flex gap-3'>
                        <span className=' w-[56px] h-[56px] bg-[#232321] flex items-center justify-center rounded-xl '><IoBagHandleOutline className='text-white text-[28px]' />
                        </span>

                        <div className=' leading-8 '>
                            <h1 className='text-[20px] font-semibold'>Deliver to</h1>
                            <p className='text-[#70706E]'>Address: Dharam Colony,</p>
                            <p className='text-[#70706E]'>Palam Vihar, Gurgaon, </p>
                            <p className='text-[#70706E]'>Haryana </p>
                        </div>
                    </div>
                    <button className='bg-[#003F62] text-white w-full rounded-md'>View profile</button>
                </div>
                
                
            </div>
            <div className='flex gap-4 mt-7  '>
                    <div className='leading-7 border-[0.1389vw] w-[348px] h-[154px] rounded-xl p-5  '>
                        <h1 className='text-[20px] font-semibold'>Payment Info</h1>
                        <span className='flex gap-4'> <img src={image} className='w-[46px] h-[25px]' alt="" />   <p className='text-[#70706E]'>Master Card **** **** 6557</p></span>
                        <p className='text-[#70706E]'>Business name: Shristi Singh</p>
                        <p className='text-[#70706E]'>Phone: +91 904 231 1212</p>
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <h1 className='text-[20px] font-semibold'>Note</h1>
                        <label htmlFor="" className='absolute mt-14 pl-5 text-[#70706E]'>Type some notes</label>
                        <input type="text"  className='w-[712px] h-[120px] border-[0.1389vw] border-[#E7E7E3] pl-4 outline-none bg-transparent rounded-xl ' /> 
                    </div>
            </div>

            {/* product section -tgtech */}

            <OrderProduct/>
                
        </div>
    </section>
  )
}

export default OrderDetails

