import React, { use } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseValueByUserInput, increment } from './redux/features/counterSlice';

const App = () => {

  const data = useSelector(state => state.count.value)

  const dispatch = useDispatch()

  const incrementBy1 = () => {
    dispatch(increment())
  }

  const decrementBy1 = () => {
    dispatch(decrement())
  }

  const handleIncreaseValueByUserInput = () => {
    dispatch(increaseValueByUserInput(5))
  }

  return (
    <div className='p-10 flex items-center flex-col'>
      <h1 className='text-5xl font-bold mb-5'>{data}</h1>
      <div className='flex items-center gap-5'>
        <button onClick={incrementBy1} className='px-5 py-2 bg-amber-500 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform duration-200'>Increment By 1</button>
        <button onClick={decrementBy1}
         className='px-5 py-2 bg-amber-500 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform duration-200'>Decrement By 1</button>
         <button onClick={handleIncreaseValueByUserInput}
         className='px-5 py-2 bg-amber-500 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform duration-200'>Increase By User Input</button>
      </div>
    </div>
  )
}

export default App
