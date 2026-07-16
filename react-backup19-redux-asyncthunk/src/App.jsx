import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from './redux/slice/productSlice';

const App = () => {

  const data = useSelector(state => state.product)
  console.log(data)

  const dispatch = useDispatch()

  const getProductData = () => {
    dispatch(fetchData())
  }

  return (
    <div className='p-10'>
      <button onClick={getProductData} className='px-5 py-2 bg-amber-500 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform duration-200'>Get Data</button>
    </div>
  )
}

export default App
