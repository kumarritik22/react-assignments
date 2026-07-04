import React, { useRef, useState } from 'react'

const App = () => {

  console.log("App Rendering");

  const inputRef = useRef({})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(inputRef.current.name.value);
    console.log(inputRef.current.age.value);
  }

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col gap-20'>
      <form onSubmit={submitHandler} className='w-100 h-100 bg-gray-300 rounded-xl flex items-center justify-center flex-col gap-5'>
        <input ref={(e) => {
          inputRef.current.name = e
        }} type='text' placeholder='Enter your name' className='text-2xl border p-4 rounded-md' />
        <input ref={(e) => {
          inputRef.current.age = e
        }} type='number' placeholder='Enter your age' className='text-2xl border p-4 rounded-md mb-8' />
        <input type="submit" className='bg-blue-500 px-10 py-4 rounded-md text-3xl font-semibold active:scale-95 cursor-pointer' />
      </form>
    </div>
  )
}

export default App
