import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Home: NextPage = () => {
  var height = 550

  return (
    <div className='page'>
      <Head>
        <title>TwentyTwoLabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id='ic1' className="fullheight contentbox">
        <h1 className="header">Student-led Tutoring</h1>
        <p className='body'>Digitally-based tutoring service, led and operated by students.
        <br></br>
        <br></br>
        <br></br>
        <Link href='/login'><a className="button-main outln">Let's Go</a></Link>
        </p>
        
      </div>
      <div id='ic2' className='fullheight contentbox'>
        <div className='card-basic'>
          <h1 className="header">Thoughtful Quizzes</h1>
          <p className='body subtext'>Ensure you are learning concepts by taking comprehensive quizzes that cover the topics. Review ideas, and concepts.</p>
          <div className='telemetrybox'>
            <div className='telemetry'>
              <img className='' src="/stopwatch.png" width={40} height={40} />
              <p className='body'>5-10 minutes</p>
            </div>
            <div className='telemetry'>
              <img className='' src="/brain.png" width={40} height={40} />
              <p className='body'>Varying difficulty levels</p>
            </div>
            <div className='telemetry'>
              <img className='' src="/start.png" width={40} height={40} />
              <p className='body'>Test Your Knowledge</p>
            </div>
          </div>
          <Link href='/quizzes'><a className="button-main ">Let's Go</a></Link>
          <img className='imgcard' src="/question-sign.png" width={height} height={height} />

        </div>
        <div className='card-basic'>
          <h1 className="header">Consice Videos</h1>
          <p className='body subtext'>Learn basic concepts quickly by watching short review videos that cover specific topics thoroughly and quickly.</p>
          <div className='telemetrybox'>
            <div className='telemetry'>
              <img className='' src="/stopwatch.png" width={40} height={40} />
              <p className='body'>3-10 minutes</p>
            </div>
            <div className='telemetry'>
              <img className='' src="/brain.png" width={40} height={40} />
              <p className='body'>Information dense</p>
            </div>
            <div className='telemetry'>
              <img className='' src="/start.png" width={40} height={40} />
              <p className='body'>Begin your understanding</p>
            </div>

          </div>
          <Link href='/videos'><a className="button-main ">Watch</a></Link>

          <img className='imgcard' src="/video-camera.png" width={height} height={height} />

        </div>
        <div className='card-basic'>
          <h1 className="header">Diverse Topics</h1>
          <p className='body subtext'>Learn the basics of everything you need from our broad selection of subjects ranging from computer science to US History.</p>
          <div className='telemetrybox'>
            <div className='telemetry'>
              <img className='' src="/stopwatch.png" width={40} height={40} />
              <p className='body'>5-10 minutes</p>
            </div>
            <div className='telemetry'>
              <img className='' src="/brain.png" width={40} height={40} />
              <p className='body'>Varying difficulty levels</p>
            </div>
            <div className='telemetry'>
              <img className='' src="/start.png" width={40} height={40} />
              <p className='body'>Begin your understanding</p>
            </div>
          </div>
          <a className="button-main">Let's Go</a>

          <img className='imgcard' src="/open-book.png" width={height} height={height} />

        </div>
      </div>
    </div>
  )
}

export default Home
