import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from '../context/RecipeContext';

const CreateRecipe = () => {

    const {data, setData} = useContext(recipeContext)
    const {register, handleSubmit, reset } = useForm()


    const submitHandler = (recipe) => {
      recipe.id = nanoid()
      setData([...data, recipe]);
      reset();
    }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input className='block outline-none border-b p-2'
        {...register("image")}
        type='url'
        placeholder='Enter image url'
      />
      <small className='text-red-400'>
        This is how the error is shown.
      </small>
      <input className='block outline-none border-b p-2'
        {...register("title")}
        type='text'
        placeholder='Recipe Title'
      />

      <input className='block outline-none border-b p-2'
        {...register("chef")}
        type='text'
        placeholder='Enter Chef Name'
      />
      
      <textarea 
        className='block outline-none border-b p-2'
        {...register("description")}
        placeholder='Enter description'
      >  
      </textarea>
      
      <textarea 
        className='block outline-none border-b p-2'
        {...register("ingredients")}
        placeholder='Write ingredients separated by comma'
      >  
      </textarea>
      
      <textarea 
        className='block outline-none border-b p-2'
        {...register("instructions")}
        placeholder='Write instructions separated by comma'
      >  
      </textarea>
      
      <select
        className='block outline-none border-b p-2'
        {...register("instructions")}
        placeholder='Write instructions separated by comma'
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className='block bg-amber-600 px-5 py-2 rounded mt-5 font-semibold cursor-pointer active:scale-95 transition-transform duration-200'>Save Recipe</button>
    </form>
  )
}

export default CreateRecipe
