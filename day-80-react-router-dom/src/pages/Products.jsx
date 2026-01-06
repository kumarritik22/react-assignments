import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Product = () => {
  return (
      <div>
        {/* <h1 className='text-7xl underline font-bold absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2'>Products Page</h1> */}

        <div className='bg-[#70152a] flex gap-5 text-3xl font-bold whitespace-nowrap overflow-hidden'>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
            <p>Sale is Live!!!</p>
        </div>

        <div className='flex gap-5 mt-10 text-4xl font-semibold underline absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
          <NavLink 
              to='/products/men' 
              style={({isActive}) => ({
                color: isActive? "blue" : "white"
              })}
              >Men's Collection
            </NavLink>

            <NavLink 
              to='/products/women' 
              style={({isActive}) => ({
                color: isActive? "pink" : "white"
              })}
              >Women's Collection
            </NavLink>

            <NavLink 
              to='/products/kids' 
              style={({isActive}) => ({
                color: isActive? "yellow" : "white"
              })}
              >Kid's Collection
            </NavLink>
        </div>

        <Outlet />
    </div>
  )
}

export default Product
