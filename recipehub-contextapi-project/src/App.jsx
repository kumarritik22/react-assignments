import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-800 h-screen w-screen py-10 px-[10%] text-white font-thin'>
      <Navbar />
      <Mainroutes />
      
    </div>
  )
}

export default App
