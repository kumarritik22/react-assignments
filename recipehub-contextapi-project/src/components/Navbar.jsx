import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex items-center gap-5 justify-center mb-10 text-md'>
      <NavLink 
        to="/" 
        className={({isActive}) => {
            return isActive ? "text-red-500 font-semibold" : "text-white"
        }}>
        Home
      </NavLink>
      <NavLink 
        to="/recipes" 
        className={({isActive}) => {
            return isActive ? "text-red-500 font-semibold" : "text-white"
        }}>
        Recipes
      </NavLink>
      <NavLink 
        to="/create-recipe" 
        className={({isActive}) => {
            return isActive ? "text-red-500 font-semibold" : "text-white"
        }}>
        Create Recipe
      </NavLink>
      <NavLink 
        to="/about" 
        className={({isActive}) => {
            return isActive ? "text-red-500 font-semibold" : "text-white"
        }}>
        About
      </NavLink>
    </div>
  )
}

export default Navbar
