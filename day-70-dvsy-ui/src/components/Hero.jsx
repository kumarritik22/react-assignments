import React from 'react'
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center-top rounded-2xl relative" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="h-full flex flex-col justify-center pt-50">
        <h1 className="font-thin tracking-widest text-8xl text-white"><span className="pl-33">DESIGN</span><br /><span className="pl-65">& FREEDOM</span></h1>
        <div className="flex items-center justify-center text-[#ffffff92]">
          <p className="text-base mt-6 pr-80">Explore Independent Style by Embracing Uniqueness <br /> with Our Exclusive Designer Apparel</p>
        </div>
          <button className="flex items-center justify-center left-[83%] top-[82%] gap-2 pr-15 pb-20 absolute"><i className="ri-arrow-down-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg text-[#ffffff92]" ></i><span className="text-sm font-medium text-[#ffffffc3]">LEARN MORE</span></button>
      </div>
    </div>
  )
}

export default Hero

