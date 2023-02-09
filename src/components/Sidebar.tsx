import { useSidebarState } from '../state/Site'

export default function Sidebar () {
  const sidebarOpen = useSidebarState(store => store.open)
  return (
    <aside
      className={`top-0 left-0 fixed bg-blue border-r transition-all duration-300 ${
        sidebarOpen ? '' : '-ml-96'
      }`}
    >
      <div className='h-screen bg-gray-900'></div>
      <nav className='flex-1 flex flex-col bg-white'>
        <a href='#' className='p-2'>
          Nav Link 1
        </a>
        <a href='#' className='p-2'>
          Nav Link 2
        </a>
        <a href='#' className='p-2'>
          Nav Link 3
        </a>
      </nav>
    </aside>
  )
}
