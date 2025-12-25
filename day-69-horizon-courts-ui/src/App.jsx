import React from 'react'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from './components/Services';


const App = () => {
  return (
    <div className='bg-white p-5'>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App
