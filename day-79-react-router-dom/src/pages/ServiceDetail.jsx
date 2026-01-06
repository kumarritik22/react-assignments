import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {

    const params = useParams()

  return (
    <div>
      <h1 className='capitalize whitespace-nowrap text-7xl underline font-bold absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>{params.serviceId} Service Detail Page</h1>
    </div>
  )
}

export default ServiceDetail
