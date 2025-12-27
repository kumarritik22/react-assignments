import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(0)

  return (
    <div className='bg-[#333] h-87.5 w-87.5 flex items-center flex-col rounded-3xl text-white py-10'>

      <h1 className='text-5xl font-semibold text-antiquewhite mb-5 text-red-200'>Counter</h1>  
      <h2 className='text-7xl font-bold py-5 text-gray-300'>{count}</h2>
    
      <div className='flex gap-2 items-center justify-center text-lg mt-5'>
        <button className='px-4 py-1 border border-black bg-green-500 rounded-lg' onClick={() => {
        setCount(count + 1);
      }}>Increase
      </button>

      <button className='px-4 py-1 border border-black bg-red-500 rounded-lg' onClick={() => {
        setCount(count - 1);
      }}>Decrease
      </button>

      <button className='px-4 py-1 border border-black bg-blue-500 rounded-lg' onClick={() => {
        setCount(0);
      }}>Reset
      </button>
      </div>
    </div>
  )
}

export default Counter
