import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

    const params = useParams()

  return (
    <div>
      <h1 className='text-7xl font-bold absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>User ID : {params.id}</h1>
    </div>
  )
}

export default UserProfile
