import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Section2 = () => {

    const [theme, setTheme] =  useContext(ThemeDataContext);

  return (
    <div className='bg-[#184018] h-[40%] w-full'>
      <h1>Section-2</h1>
      <h2>{theme}</h2>
    </div>
  )
}

export default Section2
