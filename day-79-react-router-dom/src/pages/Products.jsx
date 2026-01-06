import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex items-center justify-center flex-col absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 '>
      <h1 className='text-7xl mb-5 underline font-bold'>Product Page</h1>
      <div className='flex gap-5'>
        <Link className='text-xl font-semibold underline' to='/products/men'>Men's Collection</Link>
        <Link className='text-xl font-semibold underline' to='/products/women'>Women's Collection</Link>
        <Link className='text-xl font-semibold underline' to='/products/kids'>Kid's Collection</Link>
        
      </div>
    </div>
  )
}

export default Products
