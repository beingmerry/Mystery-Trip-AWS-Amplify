import { useState } from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'

function App () {
  const [showDefault, setShowDefault] = useState(false)

  return (
    <>
      <Navbar fixed={false} />
     
    </>
  )
}

export default App
