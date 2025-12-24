import React from 'react'
import HeroImg from "../assets/Hero.png";

const Hero = () => {
  return (
    <div className="mt-5 h-screen w-full bg-cover bg-center rounded-2xl relative" style={{ backgroundImage: `url(${HeroImg})` }}>

      <div className='text-white flex items-center justify-center flex-col p-20 gap-5 text-center'>
        <h2 className='text-4xl '>Unleash Your Inner Champion Today. <br /> All In One Place.</h2>
        <p className='text-sm font-light'>Join the ultimate tennis experience - where passion meets performance. <br /> and every swing brings you closer to victory.</p>
        <button className='bg-[#0b0b20] px-6 py-3 rounded-full font-light'>Start your own journey</button>
      </div>
      <div className='w-full text-white flex items-center justify-between absolute top-[87%] p-7 text-xs font-light'>
          <p>Train with real professionals. <br /> Get the real results.</p>
        <div className='flex items-center gap-4'>
          <a>Instagram <i className="ri-arrow-right-up-long-line"></i></a>
          <a>Facebook <i className="ri-arrow-right-up-long-line"></i></a>
          <a>Tik Tok <i className="ri-arrow-right-up-long-line"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
