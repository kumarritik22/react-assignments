import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#12a0ec90] flex items-center justify-between min-h-15 p-5 mb-10'>
      
        <h2 className='text-2xl font-semibold'>Microsoft</h2>
        
        <div className='flex items-center gap-10 font-medium '>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            
        </div>
      
    </div>
  )
}

export default Navbar
