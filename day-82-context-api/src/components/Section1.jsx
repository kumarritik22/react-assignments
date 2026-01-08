import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Section1 = () => {

   const [theme, setTheme] =  useContext(ThemeDataContext); 

  return (
    <div className='bg-[#5b1818] h-[40%] w-full'>
      <h1>Section-1</h1>
      <h2>{theme}</h2>
    </div>
  )
}

export default Section1
