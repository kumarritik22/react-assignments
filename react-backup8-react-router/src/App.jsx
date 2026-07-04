import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Error from './pages/Error'
import Cleaning from './pages/Cleaning'
import Cooking from './pages/Cooking'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div>

      <div className='bg-gray-300 w-full h-25 py-4 px-8 flex items-center justify-between'>
        <h1 className='text-4xl text-amber-500'>Snitch</h1>
        <div className='text-2xl flex gap-10'>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />}>
          <Route path='cleaning' element={<Cleaning />} />
          <Route path='cooking' element={<Cooking />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CourseDetails />} />

      </Routes>
    </div>
  )
}

export default App
