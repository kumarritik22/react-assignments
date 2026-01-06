import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState("light")

  const changeTheme = (newTheme)=> {
    setTheme(newTheme)
  }

  return (
    <div>
      <h1 className="mb-3">Theme is {theme}</h1>
      <Navbar theme={theme} changeTheme={changeTheme} />
    </div>
  )
}

export default App
