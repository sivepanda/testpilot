import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: NextPage = () => {
  var height = 100
  return (
    <nav className='navbar'>
        <div className='logo'>
          <Image src="/ttl_bw.svg" alt="TwentyTwoLabs" width={height} height={height} />
        </div>
        <div className='links'>
          <Link href='/'><a className='navlink'>Home</a></Link>
          <Link href='/videos'><a className='navlink'>Videos</a></Link>
          <Link href='/quizzes'><a className='navlink'>Quizzes</a></Link>
          <Link href='/about'><a className='navlink'>About</a></Link>
        </div>
    </nav>
  )
}

export default Navbar