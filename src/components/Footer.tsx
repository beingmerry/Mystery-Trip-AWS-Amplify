import BenMerrymanProfilePic from '../assets/ProfilePic_1800x1800_2021_Conshy.jpg'

export default function Footer () {
  return (
    <footer className='p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a
          href='https://www.linkedin.com/in/benmerryman/'
          target='_blank'
          className='flex items-center mb-4 sm:mb-0'
        >
          <img
            src={BenMerrymanProfilePic}
            className='h-14 mr-3 rounded-full'
            alt='Ben Merryman'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Built by Ben Merryman
          </span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a href='https://github.com/beingmerry/Mystery-Trip-AWS-Amplify' className='mr-4 hover:underline md:mr-6 ' target='_blank'>
              Project Repo
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              Tools and Skills Used
            </a>
          </li>
          <li>
            <a href='mailto:ben.merryman@gmail.com?subject=Looking for work?&body=We may have just the role for you!' className='hover:underline'>
              Ben.Merryman@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        2023 - Made with Skills earned at{' '}
        <a href='https://flatironschool.com/' className='hover:underline' target='_blank'>
          Flatiron
        </a>
      </span>
    </footer>
  )
}
{
  /* <a href='https://github.com/beingmerry' target={'_blank'} className=''>
🌋 Flatiron 2023 - Ben Merryman
</a> */
}

;<footer className='border-t-4 bg-slate-400 w-full bottom-0 '>
  <div>
    🛠️ Built by Ben Merryman - 2023
    <div className='flex'>
      <svg
        viewBox='0 0 16 16'
        className='w-5 h-5'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
      </svg>
      <a
        href='https://github.com/beingmerry'
        target={'_blank'}
        className='flex pl-2 align-middle pr-6'
      >
        Personal GitHub
      </a>
    </div>
    <div className='flex'>
      <svg
        className='w-5 h-5 text-black fill-current'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
      </svg>
      <a
        href='https://www.linkedin.com/in/benmerryman/'
        target={'_blank'}
        className='flex pl-2 align-middle'
      >
        Developer LinkedIn
      </a>
    </div>
  </div>
</footer>
