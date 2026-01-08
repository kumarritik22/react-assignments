import React from 'react'
import { Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <h1 className='text-7xl underline font-bold absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>Services Page</h1>
      <Outlet />
    </div>
  )
}

export default Services
