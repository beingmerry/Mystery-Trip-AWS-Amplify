import { useState } from 'react'
import Navbar from './Navbar'
import SplashLanding from './SplashLanding'

function App () {
  const [showDefault, setShowDefault] = useState(false)

  return (
    <>
      <Navbar fixed={false} />
      <SplashLanding />
    </>
  )
}

export default App
