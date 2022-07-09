import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
// import Navbar from 'next/navbar'
// import Footer from 'next/footer'

const Home: NextPage = () => {
  return (
    <html className='min-h-screen'>
      <Navbar />
    <div className="contentbox">
      <div className="text-5xl font-display">An Education Experience</div>
    </div>
    </html>
  )
}

export default Home
