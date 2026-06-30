import { useState } from "react"

const Card = ({data, like, dislike}) => {

  return (
    <div className="flex gap-10">
      {data.map((item) => {
        return  <div key={item.id} className='h-150 w-150 bg-black rounded-2xl p-5 flex items-center flex-col'>
                  <img className="h-50 w-50 rounded-full object-cover" src={item.url} />
                  <h1 className="text-4xl m-5 text-red-500 font-sans font-bold">{item.name}</h1>
                  <p className="mb-5 text-lg">{item.description}</p>
                  <h2 className="text-2xl font-bold mb-5">Like Count : {item.likeCount}</h2>
                  <div className="flex gap-10">
                    <button 
                      onClick={() => {
                        like(item.id)
                      }} 
                      className="bg-green-500 px-6 py-3 font-bold text-2xl rounded-xl cursor-pointer active:scale-95 transition-transform">
                      Like
                    </button>
                    <button 
                      onClick={() => {
                        dislike(item.id)
                      }} 
                      className="bg-red-500 px-6 py-3 font-bold text-2xl rounded-xl cursor-pointer active:scale-95 transition-transform">
                      Dislike
                    </button>
                  </div>
                </div>
              })}
    </div>
  )
}

export default Card
