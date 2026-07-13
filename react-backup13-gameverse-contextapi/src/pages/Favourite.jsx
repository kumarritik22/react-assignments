import React, { useContext, useEffect } from 'react'
import { GamesDataContext } from '../context/GamesContext'

const Favourite = () => {

  const {favourite} = useContext(GamesDataContext)

  useEffect(() => {
    console.log(favourite);
  }, [favourite])
  
  if (favourite.length === 0) {
    return <p className="text-white font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">You haven't added any games to your favourites yet.</p>
  }

  return (
    <div className='text-white p-10'>
      {favourite.map((fav) => {
        return <h1>Hello</h1>
      })}
    </div>
  )
}

export default Favourite
