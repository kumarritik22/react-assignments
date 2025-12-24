import React from 'react'
import CourtImg from "../assets/court.png";
import ManImg from "../assets/man.png";

const About = () => {
  return (
    <div className='mt-5'>
        <div className='p-10 text-black flex items-start justify-between'>
            <h4 className='text-sm border border-[#0000004f] px-3 py-1 rounded-full'>About Horizon</h4>
            <p className='font-medium text-xl'>At Horizon, we don't just play tennis - we live it. Since 2021, <br /> our club has been a home for players of all lavels, from eager <br /> beginners to seasoned pros.</p>
        </div>

        <div className='flex gap-5 items-center justify-between '>
            <div className='h-75 w-95 bg-[#121230] rounded-3xl p-5 text-white'>
                <div className=" h-15 w-15 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${CourtImg})` }}></div>
                <p className='text-2xl mt-3'>Professioinal hard courts <span className='text-[#ffffff89]'>with tournament-grade lighting & climate control - play in</span> perfect conditions, in any season.</p>
                <div className='flex mt-5 gap-3 items-center'>
                  <i className="ri-toggle-fill text-5xl text-blue-300"></i> <h4 className='text-[#ffffff83] font-light'>Game Mode</h4>
                </div>
            </div>
            <div className='h-75 w-95 rounded-3xl text-white overflow-hidden relative'>
              <div className="h-full w-full bg-cover bg-center rounded-2xl flex items-center justify-center" style={{ backgroundImage: `url(${ManImg})` }}>
                <button className='px-4 py-2 bg-[#ffffff65] border border-[#ffffff00] rounded-full'>Private & Group Lessons</button>
              </div>
            </div>
            <div className='h-75 w-95 bg-[#121230] rounded-3xl'></div>
        </div>
    </div>
    
  )
}

export default About

