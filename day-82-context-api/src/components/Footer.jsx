import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Footer = () => {

    const [theme, setTheme] =  useContext(ThemeDataContext);

  return (
    <div className='bg-[#101042] h-[10%] w-full'>
      <h1>Footer</h1>
      <h2>{theme}</h2>
    </div>
  )
}

export default Footer
