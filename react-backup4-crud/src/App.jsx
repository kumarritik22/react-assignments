import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [title, setTitle] = useState("")
  const [caption, setCaption] = useState("")
  const [postData, setPostData] = useState(JSON.parse(localStorage.getItem("FormData") || []))
  const [edit, setEdit] = useState(null)

  useEffect(() => {
   localStorage.setItem("FormData", JSON.stringify(postData))
  }, [postData])
  

  const submitHandler = (e) => {
    e.preventDefault()

    if(edit !== null) {
      const copy = [...postData]
      copy[edit] = {title, caption}
      setPostData(copy)
      setEdit(null)
    } else {
      const newArr = [...postData]
      newArr.push({title, caption})
      setPostData(newArr);
    }

    setTitle("")
    setCaption("")
  }

  const deleteHandler = (idx) => {
    // const deleteArr = [...postData]
    // deleteArr.splice(idx, 1)
    // setPostData(deleteArr)

    const deleteArr = postData.filter((post, currentIndex) => {
      return currentIndex !== idx
    })

    setPostData(deleteArr)
  }

  return (
    <div className='h-screen w-full p-10 flex flex-col gap-10'>
      <form 
        onSubmit={submitHandler} 
        className='h-80 w-80 bg-zinc-700 rounded-lg flex gap-5 items-center justify-center flex-col'>
        <input 
          value={title} 
          onChange={(e) => {
            setTitle(e.target.value)
            }} 
          type='text' placeholder='Enter post title' className='text-xl p-2 border rounded-lg' />
        <input 
          value={caption} 
          onChange={(e) => {
            setCaption(e.target.value)
            }} 
          type='text' placeholder='Enter post caption' className='text-xl p-2 border rounded-lg mb-5' />
        <button 
          className='bg-blue-400 px-8 py-5 text-xl font-medium rounded-lg active:scale-95 cursor-pointer'>
          Create Post
        </button>
      </form>

      <Card 
        postData={postData} 
        deleteHandler={deleteHandler} 
        setTitle={setTitle} 
        setCaption={setCaption} 
        setEdit={setEdit} 
      />
    </div>
  )
}

export default App
