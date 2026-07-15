import React from 'react'
import cyberpunk from "../assets/cyberpunk.png"
import { useNavigate } from 'react-router'
import { RiStarFill } from 'react-icons/ri'

const Card = ({item}) => {

  const navigate = useNavigate()

  return (
    <div className='w-70 min-h-90 mt-8 bg-[#111111] rounded-lg border border-zinc-700'>
      <div className='w-full h-1/2'>
        <img className='h-48 w-full object-cover rounded-lg' src={item.background_image} />
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-3 gap-3'>
          <h2 className='text-white font-bold text-lg h-10 flex items-center'>{item.name}</h2>
          <div className='flex items-center gap-1'>
            <RiStarFill size={15} className='text-amber-300' />
            <h5 className='font-bold'>{item.rating}</h5>
          </div>
        </div>
        <p className='text-[#95a3b8] text-sm font-medium mb-5'>Experince Night City as a mercenary outlaw in this open-world, and you...</p> 
        <button onClick={() => {
          navigate(`/gameDetails/${item.id}`)
        }} className='bg-white text-black w-full py-2 rounded-lg font-semibold text-sm cursor-pointer active:scale-95 transition-transform duration-200'>View Details</button>
      </div> 
    </div>
  )
}

export default Card
