import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Footer: NextPage = () => {
  var height = 100
  return (
    <div className="bottom body">
        <div className="foot">
          <div className="imText">
            <img src="/ttl_bw.svg"></img>
            <p>Our mission is to help students better understand school from a perspective of highschoolers themselves.</p>
          </div>
          <div className = "ed e">
            <a>Education</a>
            <ol>
              <li>Videos</li>
              <li>Quizzes</li>
              <li>Practice</li>
            </ol>
          </div>
          <div className = "ed i">
            <a>Info</a>
            <ol>
              <li>Videos</li>
              <li>Quizzes</li>
              <li>Practice</li>
            </ol>
          </div>
          <div className = "ed s">
            <a>Socials</a>
            <ol>
              <li>Videos</li>
              <li>Quizzes</li>
              <li>Practice</li>
            </ol>
          </div>
          
        </div>
        <div className = "copy">
          <div className="copyright">
            <p>2022 TwentyTwoLabs Media™. All rights reserved.</p>
          </div>
          <div className="priv">
            <Link href=""><a>Privacy Policy</a></Link>
          </div>
          <div className="priv">
            <Link href=""><a>Terms of Use</a></Link>
          </div>
          <div className="priv">
            <Link href=""><a>Legal</a></Link>
          </div>
        </div>
      </div>
  )
}

export default Footer