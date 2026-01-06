import React from 'react'
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-[#12a0ec90] flex items-center justify-between min-h-15 w-full absolute bottom-0 p-5'>
        <h2 className='text-2xl font-semibold'>LOUIS VUITTON</h2>
        <button className='font-medium border border-black px-5 py-2 bg-amber-400 text-black rounded-lg active:scale-95 cursor-pointer' onClick={()=> {
            navigate("/products");
        }}>Explore Products</button>
    </div>
  )
}

export default Footer
