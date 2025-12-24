import React from 'react'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Card from "./components/Card";

const App = () => {
  return (
    <div className='bg-white p-5'>
      <Navbar />
      <Hero />
      <About />
      <Card />
    </div>
  )
}

export default App
