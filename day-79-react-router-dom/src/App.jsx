import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Men from './pages/Men';
import Women from './pages/Women';
import Random from './pages/Random';
import Kids from './pages/Kids';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import AnyServices from './pages/AnyServices';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
    
      <Navbar />
      <Footer />
      <Routes>
        
        {/* Direct Routing */}
        <Route path ='/' element={<Home />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/contact' element={<Contact />} />
        <Route path ='/services' element={<Services />} />

        {/* Nested Routing */}
        <Route path ='/products' element={<Products /> } />
          <Route path ='/products/men' element={<Men />} />
          <Route path ='/products/women' element={<Women />} />
          <Route path ='/products/kids' element={<Kids />} />

        {/* Dynamic Routing */}
        <Route path ='/about/:id' element={<Random />} />
        <Route path ='/services/:serviceId' element={<AnyServices />} />
        
        {/* Nested Dynamic Routing */}
        <Route path ='/services/:serviceId/detail' element={<ServiceDetail />} />

        {/* Not Found Page */}
        <Route path ='/*' element={<NotFound />} />
        
      </Routes>
    </div>
    
  )
}

export default App
