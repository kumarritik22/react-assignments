import React, { useContext } from 'react'
import { userDataContext } from './context/UserContext'
import Navbar from './components/Navbar'

const App = () => {

  const data =  useContext(userDataContext)

  return (
    <div>
      <h1>Hi, I am {data} from App.</h1>
      <Navbar />
    </div>
  )
}

export default App
