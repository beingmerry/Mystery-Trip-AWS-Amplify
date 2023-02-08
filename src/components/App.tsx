import { useState } from 'react'
import Navbar from './Navbar'

function App () {
  const [showDefault, setShowDefault] = useState(false)

  return (
    <>
      <Navbar fixed={false} />
    </>
  )
}

export default App
