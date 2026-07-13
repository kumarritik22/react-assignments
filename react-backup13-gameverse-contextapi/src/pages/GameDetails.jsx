import { Boxes, Copyright, FileText, Gamepad, Globe, Heart, Info, Languages, MonitorSmartphone, Share2, ShoppingCart, Star, Users } from 'lucide-react';
import React, { useContext } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import { GamesDataContext } from '../context/GamesContext';

const GameDetails = () => {

    const {data} = useLoaderData();

    const {addToFav, favourite} = useContext(GamesDataContext);

    const navigate = useNavigate();
   

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
                    <span className='font-bold'>{data.rating}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className='text-6xl font-extrabold mb-3 flex flex-1 tracking-tight'>
              {data.name}
            </h1>

            {/* Company */}
            <h6 className='text-[#dadada] font-semibold'>
              {data.publishers?.[0]?.name} - {data.released}
            </h6>
          </div>

          {/* Right Section */}
          <div className="right flex gap-4 shrink-0">
            <button className="flex items-center gap-2 bg-[#1381f0] py-3 px-7 rounded-xl font-semibold text-white cursor-pointer active:scale-95 transition-transform duration-200">
              <ShoppingCart size={22}  />
              Buy Now
            </button>

            <button 
              onClick={() => {
                addToFav(data);
                navigate("/favourite");
              }} 
              className="flex items-center gap-2 bg-[#222222] py-2 px-5 text-sm rounded-xl font-semibold border-zinc-600 border cursor-pointer active:scale-95 transition-transform duration-200"
              >
              <Heart size={20} />
              Add to Favourites
            </button>
          </div>                       
        </div>
      </div>

      {/* Left Cards Section */}
      <div className='body flex gap-10'>
        <div className='left Panel mt-15 w-[65%]'>
          <div className='about flex items-center gap-2 mb-3'>
            <FileText size={20} className='text-[#1381f0]' />
            <h2 className='font-bold'>
              About the Game
            </h2>
          </div>
          <p className='text-[#95a3b8] font-medium'>{data.description_raw}</p>

          <div className='cards mt-10 flex items-center gap-5'>
            <div className='bg-[#0f172a] rounded-2xl p-5 border border-zinc-800 w-60'>
              <MonitorSmartphone size={25} className='text-[#137fec] mb-2' />
              <h6 className='text-sm text-[#455266] font-semibold'>Platforms</h6>
              <h3 className='font-semibold'>
                {data.parent_platforms.slice(0, 3).map((item, index) => {
                  return `${item.platform.name}${index !== data.parent_platforms.slice(0, 3).length - 1 ? ", " : ""}`
                })}
                {data.parent_platforms.length > 3 && 
                ` +${data.parent_platforms.length - 3}`}
              </h3>
            </div>

            <div className='bg-[#0f172a] rounded-2xl p-5 border border-zinc-800 w-60'>
              <Boxes size={25} className='text-[#137fec] mb-2' />
              <h6 className='text-sm text-[#455266] font-semibold'>Genre</h6>
              <h3 className='font-semibold'>
                {data.genres.map((genre, index) => {
                  return `${genre.name}${index !== data.genres.length - 1 ? ", " : ""}`
                })}
              </h3>
            </div>

            <div className='bg-[#0f172a] rounded-2xl p-5 border border-zinc-800 w-60'>
              <Users size={25} className='text-[#137fec] mb-2' />
              <h6 className='text-sm text-[#455266] font-semibold'>Players</h6>
              <h3 className='font-semibold'>Single-player</h3>
            </div>
          </div>

          <div className='media mt-10'>
            <h2 className='font-bold mb-5'>Media Gallery</h2>
            <div className='flex items-center gap-5 w-91'>
              <img src={data.background_image_additional} className='object-cover rounded-xl' />
              <img src={data.background_image_additional} className='object-cover rounded-xl' /> 
            </div>
          </div>
        </div> 

        {/* Right Card Panel */}
        <div className='right panel mt-15'>
          <div className='bg-[#0f172a] rounded-2xl p-5 border border-zinc-800'>
            <h3 className='font-bold mb-4'>Player Reviews</h3>
            <div className='flex items-center gap-3'>
              <h5 className='text-4xl font-black text-[#137fec]'>{data.rating}</h5>
              <h6 className='text-xs text-[#455266] font-semibold'>{data.reviews_count} reviews</h6>
            </div>
          </div>
          <div className='tags mt-8 bg-[#0f172a] rounded-2xl p-5 border border-zinc-800'>
            <h3 className='font-bold mb-4'>Tags</h3>
            <div 
              className='flex gap-2 flex-wrap'>
              {data.tags.slice(0, 15).map((tag) => {
                return <div key={tag.id} className='bg-[#1e293b] text-white text-sm font-semibold px-3  py-1 rounded-lg'>{tag.name}
                </div>
              })}
            </div>
          </div>
          
          <div className='system mt-8 bg-[#0f172a] rounded-2xl p-5 border border-zinc-800'>
            <div className='flex items-center gap-2 mb-3'>
              <Info size={20} className='text-[#137fec]'/>
              <h3 className='text-[#137fec] font-bold'>System Requirements</h3>
            </div>
              <p className='text-[#95a3b8] text-sm font-medium'>Requires a 64-bit processor and operating system. Recommended RTX 30-series for Ray Tracing.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='footer-top mt-25 border-t border-zinc-800'>
        <div className='top section flex gap-35 items-start mt-10'>
          <div className='brand w-[23%]'>
            <div className='logo row flex items-center gap-2 mb-5'>
              <Gamepad size={25} className='text-[#1381f0]' />
              <h4 className='font-bold text-lg text-white'>GameVerse</h4>
            </div>
            <p className='text-sm text-[#58667b] font-medium'>The ultimate destination for game discovery and library management. Built for gamers, by gamers.</p>
          </div>

          <div className='explore'>
              <h5 className='text-[#abb1bb] text-sm font-semibold mb-5'>EXPLORE</h5>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Top Rated</p>
              <p className='text-[#58667b] text-xs font-medium mb-3'>New Releases</p>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Indie Gems</p>
            </div>

            <div className='support'>
              <h5 className='text-[#abb1bb] text-sm font-semibold mb-5'>SUPPORT</h5>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Help Center</p>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Safety Center</p>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Community Guidelines</p>
            </div>

            <div className='legal'>
              <h5 className='text-[#abb1bb] text-sm font-semibold mb-5'>LEGAL</h5>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Privacy Policy</p>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Terms of Service</p>
              <p className='text-[#58667b] text-xs font-medium mb-3'>Cookie Policy</p>
            </div>
        </div>
      </div>

      <div className='footer-bottom mt-8 border-t border-zinc-800 flex justify-between items-center'>
        <div className='copyright mt-6 flex gap-1 items-center'>
          <Copyright size={12} className='font-medium text-[#58667b]' />
          <h6 className='text-xs font-medium text-[#58667b]'>2026 GameVerse Inc. All rights reserved.</h6>
        </div>
        <div className='icons flex items-center gap-5 mt-6'>
          <Languages size={17} className='font-medium text-[#58667b]' />
          <Share2 size={17} className='font-medium text-[#58667b]' />
          <Globe size={17} className='font-medium text-[#58667b]' />
        </div>
      </div>
    </div>
  )
}

export default GameDetails
