import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        {data.map((item) => {
        return  <div className='h-200 w-200 bg-black m-10 rounded-xl flex items-center flex-col'>
                    <img className='h-100 w-100 object-cover rounded-full mt-10' src={item.url} />
                    <h1 className='text-6xl m-10 text-red-500 font-sans font-bold'>{item.name}</h1>
                    <h2 className='font-bold'>{item.age} Years</h2>
                    <p className='m-5 p-5 text-xl'>{item.description}</p>
                </div>
        })}
    </div>
  )
}

export default Card
