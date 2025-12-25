import React from 'react'
import WomanImg from "../assets/woman.png";
import BallsImg from "../assets/balls.png";

const Services = () => {
  return (
    <div className='mt-15 mb-10 flex items-start justify-between'>

      {/* card-1 */}
      <div className='text-black h-75 w-95 ml-2 relative'>
         <h4 className='text-sm border border-[#0000004f] px-3 py-1 rounded-full w-fit mb-5'>Services
         </h4>
         <p className='text-[22px]'>Explore our full range of coaching,  training, and tennis experiences, From  first serve to match point - we've  got the right program for you.</p>
         <div className='bg-[#0b0b20] px-4 py-2 rounded-full text-white font-light w-fit absolute bottom-0 text-sm'>
          <button className='flex gap-2'><span>Explore More</span>
          <i className="ri-arrow-right-up-long-line"></i></button>
        </div>
      </div>

      {/* card-2 */}
      <div className='h-75 w-95 rounded-3xl text-white overflow-hidden '>
        <div className="h-full w-full bg-cover bg-center rounded-2xl p-5 relative" style={{ backgroundImage: `url(${WomanImg})` }}>
          <div className=' px-4 py-2 bg-linear-to-r from-[#ffffff9f] to-[#ffffff13] border border-[#ffffff16] rounded-full text-xs font-light w-fit'>Training Programs</div>
          
          <div className='flex items-center justify-between text-white absolute bottom-5 left-5 right-5 '>
            <p className='text-sm'>Programs designed for <br /> all ages and abilities.</p>
            <a className='flex items-center justify-center h-8 w-8 rounded-full bg-black '><i className="ri-arrow-right-up-long-line"></i></a>

          </div>
        </div>
      </div>

      {/* card-3 */}
      <div className='h-75 w-95 rounded-3xl text-white'>
        <div className="h-45 w-full bg-cover bg-center rounded-2xl p-5 relative" style={{ backgroundImage: `url(${BallsImg})` }}>
          <div className='px-4 py-2 bg-linear-to-r from-[#ffffff9f] to-[#ffffff13] border border-[#ffffff16] rounded-full text-xs font-light w-fit'>Court Access</div>
          <p className='absolute bottom-5'>Hourly Court Rental</p>
        </div>

        <div className='h-30 w-95 mt-5 text-black'>
          <p className='text-sm'>Step into a space built for <br /> players - to grow and compete, <br /> and thrive.</p>
          <div className='flex items-center gap-2 mt-2'>
            <a className='flex items-center justify-center h-8 w-8 rounded-full bg-white border border-[#00000017]'>
              <i className="ri-arrow-left-long-line"></i></a>
            <a className='flex items-center justify-center h-8 w-8 rounded-full bg-white border border-[#00000017]'>
              <i className="ri-arrow-right-long-line"></i></a>
          </div> 
        </div>
      </div>

    </div>
  )
}

export default Services


