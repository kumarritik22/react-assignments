import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme, setTheme] =  useContext(ThemeDataContext);

  return (
    <div className='bg-lghtseagreen h-[10%] w-full flex items-center justify-between p-5'>
      <h1>Navbar</h1>
      <h2>{theme}</h2>
      <button onClick={()=>{
        if(theme === "Light") {
            setTheme("Dark")
        } else {
            setTheme("Light")
        }
      }} className='bg-amber-500 px-4 py-2 font-medium rounded-lg active:scale-95'>Change Theme</button>
    </div>
  )
}

export default Navbar
