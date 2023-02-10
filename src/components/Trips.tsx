import { Link, Outlet } from 'react-router-dom'

export default function Trips () {
  return (
    <div className='container px-6 py-2 h-auto w-auto'>
      <div className='flex justify-center items-center flex-wrap h-full g-6 text-slate-200'>
        <h1>Trips</h1>
        {/* <---- Trips ----> */}
        <Link
          to='/new-trip'
          className='bg-blue-600  hover:bg-blue-700 font-bold py-1 px-3 rounded'
        >
          New Trip
        </Link>
        <hr />
        <h1>Content here</h1>
        <Outlet />
      </div>
    </div>
  )
}
