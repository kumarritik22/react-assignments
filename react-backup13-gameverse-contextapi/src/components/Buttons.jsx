import React from 'react'

const Buttons = () => {

    const titles = ["All Titles", "Trending Now", "New Releases", "RPG", "Action"]

  return (
    <div className='mt-10 flex gap-4'>
      {titles.map((items, idx) => {
        return <button key={idx} className='bg-[#111111] py-1 px-5 rounded-full text-sm font-semibold cursor-pointer text-[#95a3b8] hover:bg-[#137fec] hover:text-white transition-colors duration-200'>{items}</button>
      })}
    </div>
  )
}

export default Buttons
