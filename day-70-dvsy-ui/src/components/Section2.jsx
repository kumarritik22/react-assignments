import React from 'react'
import dummyImage from "../assets/dummy.png";

const Section2 = () => {
  return (
    <div className='w-full flex gap-3 mt-3'>
      <div className='w-[50vw] mb-6'>
            <div className=" bg-[#1e1e1e] rounded-2xl text-[#ffffff92] p-10 mb-3 relative">
                <h2 className="text-[#ffffffc3] mb-3 font-medium">INDEPENDENT DESIGNERS</h2>
                <p className="text-xs w-95">Our platform celebrates the ingenuity of Independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by Independent designers.</p>
                <button className="flex gap-3 items-center justify-center absolute left-[78%] top-[63%]">
                    <i className="ri-arrow-right-up-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg "></i>
                    <span className="text-xs text-[#ffffffc3] font-medium">EXPLORE</span>
                </button>
            </div>

            <div className=" bg-[#1e1e1e] rounded-2xl text-[#ffffff92] p-10 relative">
                <h2 className="text-[#ffffffc3] mb-3 font-medium">EXCLUSIVE & UNIQUITY</h2>
                <p className="text-xs w-95">Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.</p>
                <button className="flex gap-3 items-center justify-center absolute left-[78%] top-[63%]">
                    <i className="ri-arrow-right-up-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg "></i>
                    <span className="text-xs text-[#ffffffc3] font-medium">EXPLORE</span>
                </button>
            </div>
        </div>

        <div className="w-[50vw] bg-cover bg-center-top rounded-2xl mb-6" 
            style={{  backgroundImage: `url(${dummyImage})` }}>
        </div>
    </div>
  )
}

export default Section2


