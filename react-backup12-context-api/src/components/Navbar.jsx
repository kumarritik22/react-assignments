import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Navbar = () => {

    const name = useContext(userDataContext)

  return (
    <div>
      <h1>Hi, I am {name} from Navbar.</h1>
    </div>
  )
}

export default Navbar
