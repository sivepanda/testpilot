import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Navbar: NextPage = () => {
  return (
    <nav className='gradient'>
        <div className='logo'>
            <h1 className="text-3xl text-white">TwentyTwoLabs</h1>
        </div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/videos'><a>Videos</a></Link>
        <Link href='/quizzes'><a>Quizzes</a></Link>
        <Link href='/about'><a>About</a></Link>
    </nav>
  )
}

export default Navbar