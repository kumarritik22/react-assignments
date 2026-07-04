import React from 'react'
import { useParams } from 'react-router'

const CourseDetails = () => {

    const params = useParams()
    console.log(params);

  return (
    <div className='text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-x-1/2'>
      Course Details Page
    </div>
  )
}

export default CourseDetails
