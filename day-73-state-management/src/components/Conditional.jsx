import React, { useState } from 'react'
import Washroom from "./Washroom";

const Conditional = () => {

const [gender, setGender] = useState("Male")

function changeGender() {
    if (gender === "Male") {
        setGender("Female")
    } else if (gender === "Female") {
        setGender("Others");
    } else {
        setGender("Male")
    }
}

  return (
    <div className='mt-20 h-screen, width-full flex items-center justify-center flex-col text-[aliceblue] border-2 border-white p-15 rounded-2xl'>
      <h1 className='text-5xl font-medium'>Your gender is {gender}</h1>
      <button onClick={changeGender} className='text-2xl font-medium mt-10 px-4 py-2 bg-[#df2c50] rounded-lg border-2 border-white'>Change Gender</button>

      <Washroom user={gender}  />
    </div>
  )
}

export default Conditional
