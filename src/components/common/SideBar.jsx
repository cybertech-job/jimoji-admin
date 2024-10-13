import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import logo from "../../assets/images/logo.svg"





const SideBar = () => {

    const location = useLocation()

    const navigate = useNavigate()
    const sideLinks = [
        {
            name: "DASHBOARD",
            link: "/",
            icon: <MdOutlineDashboard/>
        },
        {
            name: "ALL PRODUCTS",
            link: "/product",
            icon: <FaRegWindowRestore />
        },
        {
            name: "ORDER LIST",
            link: "/order", 
            icon: <IoDocumentText/>
        },
    ]



  return (
    <div className=' bg-[#f4f4f4] w-[18.16vw] h-[100%] border-r-[0.1389vw] border-[#232321] border-opacity-[20%] pt-[2vw]'>
        <div>

            <div className='flex flex-col items-center gap-[1.11vw]'>
            <img src={logo} alt="logo" className='h-[3.366vw] w-[12.11vw] mb-[1vw]' />
                {
                    sideLinks.map((item) => (
                        <div 
                        onClick = { () => navigate(item.link)}
                            key={item.name}
                            className={` ${location.pathname === item.link && "bg-[#003F62] text-white"} font-medium hover:bg-[#003F62] h-[3.33vw] w-[14vw] rounded-[0.556vw] flex items-center pl-[1.1vw] gap-[0.412vw] text-[0.972vw] text-[#232321] hover:text-white cursor-pointer`}>

                            <div className=''>
                                {item.icon}
                            </div>
                            <p>{item.name}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar