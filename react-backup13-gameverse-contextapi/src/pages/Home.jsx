import React, { useEffect } from 'react'
import { api } from "../config/api.js"
import Buttons from '../components/Buttons.jsx'
import Card from '../components/Card.jsx'
import { useLoaderData } from 'react-router'

const Home = () => {

    const {data} = useLoaderData()
    console.log(data);
    
  return (
    <div className='text-white w-full min-h-screen p-5'>
      <div className=''>
        <h1 className='text-5xl font-bold mb-4 tracking-tight'>Explore the Metaverse</h1>
        <p className='text-md text-[#95a3b8] font-medium w-[45%]'>Discover your next obsession from our Meticulously curated database of the world's most legendary title. </p>
      </div>
      <Buttons />
      <div className='flex items-center flex-wrap gap-5'>
        {data.results.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Home
