import React from 'react'

const Cards = () => {
  return (
    <div className="mt-3 flex items-center gap-5">
        <div className=" bg-[#1e1e1e] rounded-2xl text-[#ffffff92] p-10 w-100">
            <h2 className="text-[#ffffffc3] mb-3 font-medium">INDEPENDENCY</h2>
            <p className="text-xs mb-6">Explore the creativity of Independent designers from around the globe.</p>
            <button className="flex gap-3 items-center justify-center">
                <i className="ri-arrow-right-up-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg "></i>
                <span className="text-xs text-[#ffffffc3] font-medium">LEARN MORE</span>
            </button>
        </div>

        <div className=" bg-[#1e1e1e] rounded-2xl text-[#ffffff92] p-10 w-100">
            <h2 className="text-[#ffffffc3] mb-3 font-medium">UNIQUITY</h2>
            <p className="text-xs mb-6">Discoder the charm of unique pieces that stands out effortlessly.</p>
            <button className="flex gap-3 items-center justify-center">
                <i className="ri-arrow-right-up-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg "></i>
                <span className="text-xs text-[#ffffffc3] font-medium">LEARN MORE</span>
            </button>
        </div>

        <div className=" bg-[#1e1e1e] rounded-2xl text-[#ffffff92] p-10 w-100">
            <h2 className="text-[#ffffffc3] mb-3 font-medium">QUALITY</h2>
            <p className="text-xs mb-6">Experience unparalleled craftsmanship and attention to detail.</p>
            <button className="flex gap-3 items-center justify-center">
                <i className="ri-arrow-right-up-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg "></i>
                <span className="text-xs text-[#ffffffc3] font-medium">LEARN MORE</span>
            </button>
        </div>

        <div className=" bg-[#1e1e1e] rounded-2xl text-[#ffffff92] p-10 w-100">
            <h2 className="text-[#ffffffc3] mb-3 font-medium">SUSTAINABILITY</h2>
            <p className="text-xs mb-6">Embrace eco-conscious fashion choices without compromising on style.</p>
            <button className="flex gap-3 items-center justify-center">
                <i className="ri-arrow-right-up-line border border-[#ffffff92] rounded-full bg-[#616161] h-7 w-7 text-lg "></i>
                <span className="text-xs text-[#ffffffc3] font-medium">LEARN MORE</span>
            </button>
        </div>
    </div>
  )
}

export default Cards
