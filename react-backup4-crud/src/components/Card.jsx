import React from 'react'

const Card = ({postData, deleteHandler, setTitle, setCaption, setEdit}) => {
  return (
      <div className='card flex flex-wrap gap-5'>
        {postData.map((post, idx) => {
            return <div key={idx} className='min-w-100 min-h-60 bg-amber-800 rounded-lg flex items-center gap-2 justify-center flex-col'>
                <h1 className='text-xl font-medium'>{post.title}</h1>
                <p className='text-xl font-medium mb-10'>{post.caption}</p>
                <div className='w-full flex items-center justify-between px-6'>
                    <button 
                        onClick={() => {
                            deleteHandler(idx)
                            }} 
                        className='bg-red-400 px-6 py-3 text-xl font-medium rounded-lg active:scale-95 cursor-pointer'>
                        Delete Post
                    </button>
                    <button 
                        onClick={() => {
                            setTitle(post.title)
                            setCaption(post.caption)
                            setEdit(idx)
                        }} 
                        className='bg-green-600 px-6 py-3 text-xl font-medium rounded-lg active:scale-95 cursor-pointer'>
                        Edit Post
                    </button>
                </div>
            </div>
        })}
      </div>
  )
}

export default Card
