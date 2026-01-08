import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
