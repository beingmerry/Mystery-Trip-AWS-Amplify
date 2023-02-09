import { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import SplashLanding from './SplashLanding'

function App () {
  const [showDefault, setShowDefault] = useState(false)
  const [trips, setTrips] = useState([])
  useEffect(() => {
    fetch('/trips')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      }),
      []
  })
  return (
    <div className='flex flex-col h-screen justify-between '>
      <Header fixed={false} />
      <div className='flex h-full w-auto justify-center dark:bg-slate-700 overflow-auto'>
        <SplashLanding />
      </div>
      <Footer />
    </div>
  )
}

export default App
