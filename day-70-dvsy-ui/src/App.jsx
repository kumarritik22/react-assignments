import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Number from "./components/Number";
import About from "./components/About";
import Advantage from "./components/Advantage";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const App = () => {
  return (
    <div className="bg-black px-3">
      <Navbar />
      <Hero />
      <Cards />
      <Number />
      <About />
      <Advantage />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App
