import Link from 'next/link'

const Guest = () => {
  return (
    <div>
        <p className='text-7xl '>Welcome guest</p>
        <Link href={'/login'} className="text-2xl text-blue-500 m-2">Login</Link>
        <Link href={'/register'} className="text-2xl text-blue-500">Register</Link>

    </div>
  )
}

export default Guest