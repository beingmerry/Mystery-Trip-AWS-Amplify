import { useNavigate } from 'react-router-dom'

export default function NotFound () {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center align-middle'>
      <h3 className='flex bg-red-400'>404! Page not found</h3>
      <button
        className='btn primary'
        onClick={() => {
          navigate(-1)
        }}
      >
        Go back
      </button>
    </div>
  )
}
