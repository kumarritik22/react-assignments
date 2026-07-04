import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {

  console.log("App Rendering")

  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  console.log(errors);

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col gap-20'>
      <form 
        onSubmit={handleSubmit(handleFormSubmit)} 
        className='w-120 h-150 bg-gray-300 rounded-xl flex items-center justify-center flex-col gap-5'>

        <input 
          {...register("name", 
            {required: "Name is required!", 
              minLength: {
                value: 2,
                message: "Name must be atleast 2 characters."
              },
              maxLength: {
                value: 20,
                message: "Name cannot exceed 20 characters."
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters and spaces"
              }
          })} 
          type='text' 
          placeholder='Enter your name' 
          className='text-2xl border p-4 rounded-md' 
        />
        {errors.name && <p className='text-red-500 '>{errors.name.message}</p>}

        <input 
          {...register("age", 
            {required: "Age is required!",
              valueAsNumber: true,
              min: {
                value: 18,
                message: "Minimum age should be 18"
              },
              max: {
                value: 60,
                message: "Maximum age should be 60"
              }
            })} 
            type='number' 
            placeholder='Enter your age' 
            className='text-2xl border p-4 rounded-md' 
        />
        {errors.age && <p className='text-red-500 '>{errors.age.message}</p>}

        <input 
        {...register("email", 
          {required: "Email is required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address"
          }})}
          placeholder='Enter your email' 
          className='text-2xl border p-4 rounded-md mb-8' 
        />
        {errors.email && <p className='text-red-500 '>{errors.email.message}</p>}

        <input 
          type="submit" 
          className='bg-blue-500 px-10 py-4 rounded-md text-3xl font-semibold active:scale-95 cursor-pointer' 
        />
      </form>
    </div>
  )
}

export default App
