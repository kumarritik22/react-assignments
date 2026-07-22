import React from 'react'
import { Link } from "react-router";

const RecipeCard = (props) => {

    const {id, image, title, chef, desc} = props.recipe;

  return (
    <Link 
        to={`/recipes/details/${id}`}
        className='mb-3 mr-3 block w-[23vw] rounded overflow-hidden shadow hover:scale-102 duration-150 '
    >
        <img className='w-full h-[20vh] object-cover' src={image} alt="" />
        <h1 className='px-2 mt-2 font-black'>{title}</h1>
        <small className='px-2 text-red-400'>{chef}</small>
        <p className='px-2 pb-3'
        >
            {desc.slice(0, 100)}...{" "}
            <small className="text-blue-400">read more</small>
        </p>
    </Link>
  )
}

export default RecipeCard
