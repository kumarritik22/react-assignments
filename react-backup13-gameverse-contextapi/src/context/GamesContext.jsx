import React, { createContext, useEffect, useState } from 'react'

export const GamesDataContext = createContext()

const GamesContext = ({children}) => {

  const [favourite, setFavourite] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("FavouritesData") || "[]");
    } catch {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem("FavouritesData", JSON.stringify(favourite))
  }, [favourite])
  

  const addToFav = (game) => {
    setFavourite(prev => {
      const exists = prev.find((item) => item.id === game.id)
      if (exists) return prev
      else return [...prev, game]
    })
  }
  
  const removeFromFav = (id) => {
    setFavourite((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <GamesDataContext.Provider value = {{addToFav, favourite, removeFromFav}}>
      {children}
    </GamesDataContext.Provider>
  )
}

export default GamesContext
