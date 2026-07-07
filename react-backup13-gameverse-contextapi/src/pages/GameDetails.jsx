import { FileText, Heart, Info, ShoppingCart, Star } from 'lucide-react';
import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const GameDetails = () => {

    const params = useParams()
    console.log(params);

    const {data} = useLoaderData()
    console.log(data);

  return (
    <div className='main min-h-screen w-full bg-black py-10 px-15 text-white'>

      {/* Hero Section */}
      <div className='hero h-100 w-full rounded-2xl relative overflow-hidden'>

        {/* Background Image */}
        <img 
          src={data.background_image} 
          alt={data.name} 
          className='h-full w-full object-cover' 
        />

        {/* Dark Overlay */}
        <div className='overlay absolute inset-0 bg-black/40'></div>

        {/* Content */}
        <div className="content absolute inset-0 flex items-end justify-between p-8">

          {/* Left Section */}
          <div className='left'>
            {/* Badge + Rating */}
            <div className="flex items-center gap-3 mb-4">
              <h6 className='bg-[#1381f0] text-xs font-bold py-1 px-3 rounded-lg'>
                EDITOR'S CHOICE
              </h6>
              <div className='rating flex items-center gap-1'>
                    <Star size={15} className='text-amber-400' />
                    <span className='font-bold'>4.9</span>
              </div>
            </div>

            {/* Title */}
            <h1 className='text-6xl font-bold mb-3'>
              Cyberpunk 2077
            </h1>

            {/* Company */}
            <h6 className='text-[#dadada] font-semibold'>
              CD Projekt Red - Dec 10, 2020
            </h6>
          </div>

          {/* Right Section */}
          <div className="right flex gap-4">
            <button className="flex items-center gap-2 bg-[#1381f0] py-3 px-7 rounded-xl font-semibold text-white cursor-pointer active:scale-95 transition-transform duration-200">
              <ShoppingCart size={22}  />
              Buy Now
            </button>

            <button className="flex items-center gap-2 bg-[#222222] py-2 px-5 text-sm rounded-xl font-semibold border-zinc-600 border cursor-pointer active:scale-95 transition-transform duration-200">
              <Heart size={20} />
              Add to Favourites
            </button>
          </div>                       
        </div>
      </div>

      {/* Left Panel */}
      {/* <div className='left panel'>
        <div>
        <div className='about'>
          <FileText />
          <h2>About the Game</h2>
        </div>
          <p>Description</p>
        </div>

        <div className='img'>
          <img src='' />
          <img src='' />
          <img src='' /> 
        </div>

        <div className='media'>
          <h2>Media Gallery</h2>
          <div>
            <img src='' />
            <img src='' /> 
          </div>
        </div>
      </div>  */}

      {/* Right Panel */}
      {/* <div className='right panel'>
        <div>
          <h3>Player Reviews</h3>
          <h5>4.9</h5>
        </div>
        <div className='tags'>
          <h3>Tags</h3>
          <div>
            <div>RPG</div>
            <div>Sci-fi</div>
            <div>Open World</div>
            <div>Nudity</div>
          </div>
        </div>
        
        <div className='system'>
          <div>
            <Info />
            <h3>System Requirements</h3>
          </div>
          <div>
            <p>Requires a 64-bit processor and operating system. Recommended RTX 30-series for Ray Tracing.</p>
          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default GameDetails
