import React, { useEffect, useState } from 'react'
import { CircleUserRound, Gamepad, Search } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router';

const Navbar = () => {

  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setSearchParams(prev => {
        const params = new URLSearchParams(prev)

        if(value) {
          params.set("search", value)
        } else {
          params.delete("search")
        }

        params.set("page", 1)
        return params
      })
    }, 500);

    return () => clearTimeout(timer);

  }, [value])
  


  return (
    <div className='w-full flex items-center justify-between text-white px-8 py-3 border-b border-zinc-700'>
      <div className='flex items-center gap-3'>
        <Gamepad size={25} className='text-[#1381f0]' />
        <h1 className='font-bold text-xl text-white'>GameVerse</h1>
      </div>
      <div className='flex items-center gap-5'>
          <NavLink 
            to="/" 
            className={({isActive}) => {
              return `text-base font-semibold text-[#95a3b8] ${isActive ? "text-[#1381f0]" : "text-[#95a3b8]"}`
            }}>
            Home
          </NavLink>
          <NavLink 
            to="/games" 
            className={({isActive}) => {
              return `text-base font-semibold text-[#95a3b8] ${isActive ? "text-[#1381f0]" : "text-[#95a3b8]"}`
            }}>
            Games
          </NavLink>
          <NavLink 
            to="/favourite" 
            className={({isActive}) => {
              return `text-base font-semibold text-[#95a3b8] ${isActive ? "text-[#1381f0]" : "text-[#95a3b8]"}`
            }}>
            Favourites
          </NavLink>
      </div>
      <div className='flex items-center gap-3'>
        <div className='bg-[#111111] flex rounded-xl px-4 w-80 gap-2 items-center py-2'>
          <Search size={12} className='text-[#95a3b8]'/>
          <input 
            value={value}
            onChange={(e) => {
              return setValue(e.target.value)
            }}
            className='w-full text-sm text-[#95a3b8] outline-none' 
            type='text' 
            placeholder='Search games...' 
          />
        </div>
        <CircleUserRound size={20} className='text-[#95a3b8]' />
      </div>
    </div>
  )
}

export default Navbar
