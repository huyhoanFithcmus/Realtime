import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-row items-center justify-between w-full px-10 py-5 bg-white shadow-md'>
        <div className='flex flex-row items-center justify-between'>
          <Link to='/'></Link>
          <Link to='/'>
            <h1 className='text-2xl font-bold'>Robocus 2024</h1>
          </Link>
        </div>

        <div className='flex flex-row items-center justify-between'>
          <Link to='/ToxicWordDectection'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'>
              Toxic Word Detection
            </button>
          </Link>
          <Link to='/'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
