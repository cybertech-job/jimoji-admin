import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";




const Header = () => {
  return (
    <div className='flex justify-end pr-[3.5vw] items-center bg-[#F4F4F4] w-[100%] h-[90px] lg:h-[6.667vw] border-b-[0.1389vw]  border-[#232321] border-opacity-[20%] text-[#1C1C1A]'>
        <div className='hidden text-xl lg:text-[1.667vw] lg:flex items-center gap-[2.5vw]'>

            <FiSearch className='cursor-pointer'/>
            <IoNotifications className='cursor-pointer'/>
            <div className=' cursor-pointer flex items-center justify-center gap-[0.5vw] h-[2.78vw] w-[6.25vw] border-[0.1389vw] border-[#1C1C1A] rounded-[0.5vw]'>
                <p className='text-xl lg:text-[0.972vw]'>ADMIN</p>
                <IoIosArrowDown />
            </div>
        </div>

    </div>
  )
}

export default Header