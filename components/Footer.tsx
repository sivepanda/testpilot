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
          <div className = "linktree">
            <div className = "ed e">
              <h1>Education</h1>
              <ol>
                <li>Videos</li>
                <li>Quizzes</li>
                <li>Practice</li>
              </ol>
            </div>
            <div className = "ed i">
              <h1>Info</h1>
              <ol>
                <li>Videos</li>
                <li>Quizzes</li>
                <li>Practice</li>
              </ol>
            </div>
            <div className = "ed s">
              <h1>Socials</h1>
              <ol>
                <li>Videos</li>
                <li>Quizzes</li>
                <li>Practice</li>
              </ol>
            </div>
          </div>
          
        </div>
        <div className = "copy">
          <div className="copyright">
            <p>2022 TwentyTwoLabs Media™. All rights reserved.</p>
          </div>
          <ul className="priv">
            <li><Link href=""><a>Privacy Policy</a></Link></li>
            <li><Link href=""><a>Terms of Use</a></Link></li>
            <li><Link href=""><a>Legal</a></Link></li>
          </ul>
        </div>
      </div>
  )
}

export default Footer