import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import CreateRecipe from '../pages/CreateRecipe'
import About from '../pages/About'
import SingleRecipe from '../pages/SingleRecipe'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/recipes' element= {<Recipes />} />
        <Route path='/recipes/details/:id' element= {<SingleRecipe />} />
        <Route path='/create-recipe' element= {<CreateRecipe />} />
        <Route path='/about' element= {<About />} />
    </Routes>
  )
}

export default Mainroutes
