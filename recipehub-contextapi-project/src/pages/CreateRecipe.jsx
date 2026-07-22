import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";

const CreateRecipe = () => {

    const navigate = useNavigate()

    const {data, setData} = useContext(recipeContext)
    const {register, handleSubmit, reset } = useForm()


    const submitHandler = (recipe) => {
      recipe.id = nanoid()
      setData([...data, recipe]);
      toast.success("New recipe created!");
      reset();
      navigate("/recipes");
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
        {...register("desc")}
        placeholder='Enter description'
      >  
      </textarea>
      
      <textarea 
        className='block outline-none border-b p-2'
        {...register("ingr")}
        placeholder='Write ingredients separated by comma'
      >  
      </textarea>
      
      <textarea 
        className='block outline-none border-b p-2'
        {...register("inst")}
        placeholder='Write instructions separated by comma'
      >  
      </textarea>
      
      <select
        className='block outline-none border-b p-2'
        {...register("category")}
      >
        <option value="breakfast">Break-fast</option>
        <option value="brunch">Brunch</option>
        <option value="lunch">Lunch</option>
        <option value="Supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className='block bg-amber-600 px-5 py-2 rounded mt-5 font-semibold cursor-pointer active:scale-95 transition-transform duration-200'>Save Recipe</button>
    </form>
  )
}

export default CreateRecipe
