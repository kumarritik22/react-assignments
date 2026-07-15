import React, { useContext, useEffect } from 'react'
import { GamesDataContext } from '../context/GamesContext'
import { RiAtLine, RiChat4Fill, RiEarthFill, RiGamepadFill, RiHeart3Fill } from 'react-icons/ri'
import { Copyright, Trash2 } from 'lucide-react'

const Favourite = () => {

  const {favourite, removeFromFav} = useContext(GamesDataContext)

  useEffect(() => {
  }, [favourite])
  
  if (favourite.length === 0) {
    return <p className="text-white font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">You haven't added any games to your favourites yet.</p>
  }

  return (
    <div className='parent min-h-screen'>
      <div className='text-white px-5 py-10'>
        <h2 className='text-4xl font-extrabold mb-2'>Your Favourites</h2>
        <p className='text-[#95a3b8]'>Manage and launch your curated collection of saved titles.</p>
        <div className='border border-zinc-800 mt-5'></div>
        <div className='flex items-center flex-wrap gap-5'>
          {favourite.map((item) => {
            return <div key={item.id} className='w-70 min-h-90 mt-7 bg-[#080c15] rounded-lg border border-zinc-700 overflow-hidden'>
              <div className='w-full h-1/2 relative'>
                <img className='h-48 w-full object-cover' src={item.background_image} />
                < RiHeart3Fill size={25} className='text-[#1487fa] absolute top-2 right-2' />
              </div>
              <div className='p-4'>
                <div className="flex items-center justify-between"> 
                  <h4 className="text-white h-15 font-bold text-lg flex items-center">{item.name}</h4>
                  <div className="bg-[#09172a] p-2 rounded-lg">
                    <p className="text-[#1487fa] text-sm font-semibold">{item.rating}/5</p>
                  </div>
                </div>
                <div 
                  className="text-[#8290a2] text-sm font-medium flex items-center gap-1 mt-1"
                  >
                  {item.genres.map((genre, index) => {
                    return `${genre.name}${index !== item.genres.length - 1 ? ", " : ""}`
                  })} 
                  <div className='h-1 w-1 rounded-full bg-[#8290a2]'></div>
                  {item.publishers?.[0]?.name}
                </div>
                <div className='flex items-center justify-between mt-8'>
                  <button 
                    className='bg-[#137fec] text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform duration-200'
                    >
                    Play Now
                  </button>
                  <button 
                    onClick={() => {
                      removeFromFav(item.id)
                    }}
                    className='text-red-500 rounded-lg cursor-pointer active:scale-95 transition-transform duration-200 p-2 border border-zinc-700'
                    >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              </div>
            })}
        </div>
      </div>

      {/* Footer Section */}
      <div className='border border-zinc-800'></div>
      <div className=' footer-1 px-5 py-10 bg-[#020617] flex items-center justify-between'>
        <div className='logo flex items-center gap-2'>
          <RiGamepadFill size={23} className='text-[#1381f0]' />
          <h4 className='font-bold text-md text-white'>GameVerse</h4>
        </div>
        <div className='flex items-center gap-7'>
          <p className='text-[#9aaac0] text-sm font-medium'>Privacy Policy</p>
          <p className='text-[#9aaac0] text-sm font-medium'>Terms of Service</p>
          <p className='text-[#9aaac0] text-sm font-medium'>Support</p>
          <p className='text-[#9aaac0] text-sm font-medium'>API Docs</p>
        </div>
      </div>

      <div className='border border-zinc-800'></div>
      <div className='footer-2 px-5 py-10 bg-[#020617] flex items-center justify-between'>
        <div className='copyright flex gap-1 items-center'>
          <Copyright size={12} className='font-medium text-[#9aaac0]' />
          <h6 className='text-xs font-medium text-[#9aaac0]'>2026 GameVerse Inc. All rights reserved.</h6>
        </div>
        <div className='icons flex items-center gap-3'>
          <RiEarthFill size={20} className='font-medium text-[#9aaac0]' />
          <RiAtLine size={20} className='font-medium text-[#9aaac0]' />
          <RiChat4Fill size={20} className='font-medium text-[#9aaac0]' />
        </div>
      </div>
    </div>
  )
}

export default Favourite
