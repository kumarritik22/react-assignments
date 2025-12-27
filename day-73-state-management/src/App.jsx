import React from 'react'
import Counter from "./components/Counter.jsx"
import Marks from "./components/Marks.jsx"
import Conditional from "./components/Conditional"

const App = () => {
  return (
    <div className='bg-black flex items-center justify-center flex-col py-10'>
      <Counter />
      <Marks />
      <Conditional />
    </div>
  )
}

export default App

