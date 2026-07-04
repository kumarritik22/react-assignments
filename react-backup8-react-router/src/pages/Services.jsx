import React from 'react'
import { Link, Outlet } from 'react-router'

const Services = () => {
  return (
    <>
        <div className='text-4xl underline flex gap-30 items-center justify-center mt-60'>
            <Link to="/services/cleaning">Cleaning</Link>
            <Link to="/services/cooking">Cooking</Link>
        </div>
        <Outlet />
    </>
  )
}

export default Services
