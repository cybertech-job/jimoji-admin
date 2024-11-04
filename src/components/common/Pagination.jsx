import { useState } from "react"

export default function Pagination() {
    const [activePage, setActivePage] = useState(1)

    const handleClick =(pageNumber)=> {
      setActivePage(pageNumber)
    }

    return (
      <div className="flex gap-5 items-center mt-6">
            <div className="flex items-center space-x-5">

            {[1, 2, 3, 4,].map((page) => (
                <button
                key={page}
                onClick={() => handleClick(page)}
                className={`px-4 py-1 border-2 border-[#232321] rounded-xl ${
                    activePage === page ? 'bg-black text-white' : 'bg-transparent'
                }`}
                >
                {page}
                </button>
            ))}
            
            <button className="px-1 py-1">...</button>
            <button id='10' className="px-4 py-1 border-2 border-[#232321] rounded-xl">10</button>
            
            </div>
            <button className="px-7 py-1.5 border-2 border-[#232321] bg-transparent  rounded-xl">
            Next &gt;
            </button>
      </div> 
    )
}