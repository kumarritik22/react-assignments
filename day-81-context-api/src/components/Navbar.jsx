import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState("")

  return (
    <div className="p-10 bg-[#650f26]">
      <form onSubmit={(e)=> {
        e.preventDefault()
        props.changeTheme(newTheme)
        setNewTheme("")
      }}>
        <input 
            className='border-2 border-white mb-2' 
            type="text" placeholder="Enter Theme"
            value={newTheme}
            onChange={(e)=> {
            setNewTheme(e.target.value);
            }}
        />
        <br />
        <button className='font-medium border border-black px-5 py-2 bg-amber-400 text-black rounded-lg 
          active:scale-95 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
