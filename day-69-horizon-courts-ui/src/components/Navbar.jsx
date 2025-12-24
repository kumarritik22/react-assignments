import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='text-black text-2xl font-medium'>
        <h1>Horizon Courts</h1>
      </div>
      <div className='flex items-center gap-15 text-sm'>
        <a className='border border-[#0000004f] px-3 py-1 rounded-full'>About Us</a>
        <a>Services</a>
        <a>Coaches</a>
        <a>Events</a>
        <a>Contacts</a>
      </div>
      <div className='bg-[#0b0b20] px-6 py-2 rounded-full text-white font-light'>
        <button className='flex gap-2 '><span>Book now</span><i className="ri-arrow-right-up-long-line"></i></button>
      </div>
    </div>
  )
}

export default Navbar

