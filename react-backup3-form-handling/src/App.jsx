import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [formData, setFormData] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newArr = [...formData]
    newArr.push({name, age})
    setFormData(newArr);
  }

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col gap-20'>
      <form onSubmit={submitHandler} className='w-100 h-100 bg-gray-300 rounded-xl flex items-center justify-center flex-col gap-5'>
        <input value={name} onChange={(e) => {
          setName(e.target.value)
        }} type='text' placeholder='Enter your name' className='text-2xl border p-4 rounded-md' />
        <input value={age} onChange={(e) => {
          setAge(e.target.value)
        }} type='number' placeholder='Enter your age' className='text-2xl border p-4 rounded-md mb-8' />
        <input type="submit" className='bg-blue-500 px-10 py-4 rounded-md text-3xl font-semibold active:scale-95 cursor-pointer' />
      </form>

      <div className='w-70 h-40 rounded-lg bg-amber-900 flex items-center justify-center'>
        {
          formData.map((item) => {
            return <div className='flex items-center gap-5 justify-center flex-col italic'>
              <h1 className='text-xl font-medium'>Name : {item.name}</h1>
              <h2 className='text-xl font-medium'>Age: {item.age} Years old</h2>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
