import React from 'react'
import { useParams } from 'react-router'

const Register = () => {

    const {id} = useParams()

  return (
    <div className='text-7xl absolute top-1/2 left-1/2 -translate-x-1/2'>
      Register Page - {id}
    </div>
  )
}

export default Register
