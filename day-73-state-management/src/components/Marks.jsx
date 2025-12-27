import React, { useState } from 'react'

const Marks = () => {

    const [marks, setMarks] = useState([31, 30, 15, 60, 40, 96]);

    function graceStudent() {
        const newMarks = marks.map(function(elem) {
         if(elem > 95) {
          return elem;
         } else {
          return elem + 5;
         }
          
          
        })
        setMarks(newMarks)
    }

  return (
    <div className='h-screen, w-fit mt-15 text-[#222] bg-[skyblue] p-10 rounded-2xl'> 
    <div className='flex items-center justify-center flex-col'>
        {marks.map(function (elem, idx) {
            return <h1 key={idx} className='text-5xl font-medium'>Student {idx+1} = {elem} ({elem > 33 ? "Pass" : "Fail" }) </h1>
        })}

      <button onClick={graceStudent} className='text-2xl font-medium mt-5 px-4 py-2 bg-green-500 rounded-lg border-2 border-white'>Give Grace</button>
    </div>
    </div>
  )
}

export default Marks
