import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import NewTrip from './components/NewTrip'
import SplashLanding from './components/SplashLanding'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <SplashLanding />
      },
      {
        path: 'new-post',
        element: <NewTrip />
      }
    ]
  }
])

export default router
