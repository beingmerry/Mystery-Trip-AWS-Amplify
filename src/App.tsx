import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar/Navbar'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar fixed={false} />
      <div>
        <h1>MysteryTrip</h1>
        <h2>Taking you where you didn't know you wanted to go</h2>
      </div>
    </>
  )
}

export default App
