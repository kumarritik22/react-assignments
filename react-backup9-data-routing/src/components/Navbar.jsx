import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-gray-400 flex items-center justify-between p-8'>
      <h1 className='text-4xl font-semibold'>Adidas</h1>
      <div className='text-2xl flex gap-8 font-medium items-center'>
        <NavLink 
            to="/"
            className={({isActive}) => {
            return `text-white ${isActive ? "opacity-100" : "opacity-50"}`
            }}
            >Home
        </NavLink>
        <NavLink 
            to="/about" 
            className={({isActive}) => {
                return `text-white ${isActive ? "opacity-100" : "opacity-50"}`
            }}
            >About us
        </NavLink>
        <NavLink 
            to="/contact" 
            className={({isActive}) => {
                return `text-white ${isActive ? "opacity-100" : "opacity-50"}`
            }}
            >Contact us
        </NavLink>
        <NavLink 
            to="/services"
            className={({isActive}) => {
                return `text-white ${isActive ? "opacity-100" : "opacity-50"}`
            }}
            >Services
        </NavLink>
        <NavLink 
            to="/courses"
            className={({isActive}) => {
                return `text-white ${isActive ? "opacity-100" : "opacity-50"}`
                }}
            >Courses
        </NavLink>
        <button 
            onClick={() => navigate("/auth/login")} 
            className='bg-amber-600 px-6 py-3 font-medium rounded-md active:scale-95 cursor-pointer' >
            Login
        </button>
      </div>
    </div>
  )
}

export default Navbar
