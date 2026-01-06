import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />}>
          <Route path='/products/men' element={<Men />} />
          <Route path='/products/women' element={<Women />} />
          <Route path='/products/kids' element={<Kids />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
