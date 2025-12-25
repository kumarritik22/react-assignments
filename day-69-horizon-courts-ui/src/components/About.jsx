import React from 'react'
import CourtImg from "../assets/court.png";
import ManImg from "../assets/man.png";

const About = () => {
  return (
    <div className='mt-5'>
        {/* about section */}
        <div className='p-10 text-black flex items-start justify-between'>
            <h4 className='text-sm border border-[#0000004f] px-3 py-1 rounded-full'>About Horizon</h4>
            <p className='font-medium text-xl'>At Horizon, we don't just play tennis - we live it. Since 2021, <br /> our club has been a home for players of all lavels, from eager <br /> beginners to seasoned pros.</p>
        </div>
        
        {/* card section */}
        <div className='flex gap-5 items-center justify-between '>
            
            {/* card-1 */}
            <div className='h-75 w-95 bg-[#121230] rounded-3xl p-5 text-white'>
                <div className=" h-15 w-15 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${CourtImg})` }}></div>
                <p className='text-2xl mt-3'>Professioinal hard courts <span className='text-[#ffffff89]'>with tournament-grade lighting & climate control - play in</span> perfect conditions, in any season.</p>
                <button className='flex mt-5 gap-3 items-center'>
                  <i className="ri-toggle-fill text-5xl text-blue-300"></i> <h4 className='text-[#ffffff83] font-light'>Game Mode</h4>
                </button>
            </div>

            {/* card-2 */}
            <div className='h-75 w-95 rounded-3xl text-white overflow-hidden relative'>
              <div className="h-full w-full bg-cover bg-center rounded-2xl flex items-center justify-center" style={{ backgroundImage: `url(${ManImg})` }}>
                <div className='px-4 py-2 bg-linear-to-r from-[#ffffff8b] to-[#ffffff1a] border border-[#ffffff16] rounded-full font-light'>Private & Group Lessons</div>
              </div>
            </div>

            {/* card-3 */}
            <div className='h-75 w-95 bg-[aliceblue] rounded-3xl p-6 text-black'>
              <h2 className=' text-5xl py-'>100+</h2>
              <h4 className='py-2'>Pro Coaches</h4>
              <p className='text-sm text-[#00000081]'>Certified professionals ready to boost your game from first serve to tournament level.</p>

              <div className='mt-8 '>
                <div className="grid grid-cols-[90px_1fr_10px] items-center gap-4 py-1">
                  <h6 className=''>Beginner</h6>

                  <div className="flex items-center gap-1 justify-start">
                    {Array(10).fill(0).map((_, i) => (
                      <div key={i} className="h-4 w-4 rounded-full bg-blue-400"></div>
                    ))}
                  </div>

                  <h6 classname="text-right">55</h6>
                </div>

                <div className="grid grid-cols-[90px_1fr_10px] items-center gap-4 py-1">
                  <h6>Intermediate</h6>

                  <div className="flex items-center gap-1 justify-start">
                    {Array(8).fill(0).map((_, i) => (
                      <div key={i} className="h-4 w-4 rounded-full bg-blue-400"></div>
                    ))}
                  </div>

                  <h6 classname="text-right">40</h6>
                </div>

                <div className="grid grid-cols-[90px_1fr_10px] items-center gap-4 py-1">
                  <h6>Advanced</h6>

                  <div className="flex items-center gap-1 justify-start">
                    {Array(7).fill(0).map((_, i) => (
                      <div key={i} className="h-4 w-4 rounded-full bg-blue-400"></div>
                    ))}
                  </div>

                  <h6 classname="text-right">35</h6>
                </div>
                
              </div>
            </div>
        </div>

        {/* facts section */}
        <div className='mt-5 '>
          <h2 className='text-2xl p-5 flex items-center justify-center'>A few more facts about us in numbers</h2>

          <div className='text-black flex items-center justify-evenly p-3'>
            <div className='flex items-center flex-col'>
              <h2 className='text-4xl font-medium p-2'>12,000+</h2>
              <p className='text-[#000000a2] text-sm'>Hours of play annually</p>
            </div>

            <div className='flex items-center flex-col'>
              <h2 className='text-4xl font-medium p-2'>89%</h2>
              <p className='text-[#000000a2] text-sm'>Players Retention Rate</p>
            </div>

            <div className='flex items-center flex-col'>
              <h2 className='text-4xl font-medium p-2'>1,200+</h2>
              <p className='text-[#000000a2] text-sm'>Active Members</p>
            </div>

            <div className='flex items-center flex-col'>
              <h2 className='text-4xl font-medium p-2'>125+</h2>
              <p className='text-[#000000a2] text-sm'>Annual Tournaments</p>
            </div>
          </div>
          

        </div>

        <hr className='text-[#00000026] mt-12 -mx-5'></hr>
    </div>
    
  )
}

export default About