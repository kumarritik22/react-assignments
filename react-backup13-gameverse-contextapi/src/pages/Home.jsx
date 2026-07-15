import React, { useEffect, useState } from 'react'
import { api } from "../config/api.js"
import Buttons from '../components/Buttons.jsx'
import Card from '../components/Card.jsx'
import { useLoaderData, useSearchParams } from 'react-router'
import Footer from '../components/Footer.jsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Home = () => {

    const {data} = useLoaderData()
    // console.log(data);
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get("page")) || 1;

    const pagesToShow = 4;
    const totalPages = Math.ceil(data.count / 12);  // 75030
    const offset = pagesToShow/2;
    let startPage = page - offset

    if(startPage < 1) {
      startPage = 1
    }

    let endPage = startPage + pagesToShow - 1;
    endPage = Math.min(endPage, totalPages)

    const visibleCount = endPage - startPage + 1
    const missingPages = pagesToShow - visibleCount
    
    if (missingPages > 0) {
      startPage = startPage - missingPages
    }

    startPage = Math.max(startPage, 1);

    const visiblePages = [];

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

  return (
    <div className='text-white w-full min-h-screen p-5'>
        <h1 className='text-5xl font-extrabold mb-4 tracking-tight mt-5'>Explore the Metaverse</h1>
        <p className='text-md text-[#95a3b8] font-medium w-[45%]'>Discover your next obsession from our Meticulously curated database of the world's most legendary title. </p>
      <Buttons />
      <div className='flex items-center flex-wrap gap-5'>
        {data.results.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
      <div className='pagination flex items-center gap-3 justify-center mt-10'>
        <button
          onClick={() => {
            if (page > 1) {
              setSearchParams({
                page: page - 1
              });
            }
          }}
          className='p-2 border border-zinc-600 rounded-lg text-white cursor-pointer active:scale-95 transition-transform duration-200'
        >
          <ChevronLeft size={20} />
        </button>
        <div className='flex items-center gap-2'>
            {visiblePages.map((item) => {
              return <button key={item}
                        onClick={() => {
                          setSearchParams({
                            page: item
                          })
                        }}
                        className={`px-3 py-1 text-white rounded-lg cursor-pointer active:scale-95 transition-transform duration-200 ${item === page ? "bg-[#137fec]  font-semibold" : "bg-transparent border border-zinc-600"}`}
                      >
                        {item}
                      </button>
            })}
        </div>
        <button 
          onClick={() => {
            return setSearchParams({
              page: page + 1
            });
          }}
          className='p-2 border border-zinc-600 rounded-lg text-white cursor-pointer active:scale-95 transition-transform duration-200'
          >
          <ChevronRight size={20} />
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Home
