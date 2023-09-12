import React from 'react'
import Youtube from '../assets/ytube.png'
import Twitter from '../assets/twitter.png'
import Ig from '../assets/ig.png'
import Facebook from '../assets/facebook.png'
function Footer() {
  return (
    <div className='footer-container'>
        <div className="logo">
          <img src={Youtube} alt="" />
          <img src={Twitter} alt="" />
          <img src={Ig} alt="" />
          <img src={Facebook} alt="" />
        </div>
        <div className="text">
            <h3>Condition of Use</h3>
            <h3>Privacy and policy</h3>
            <h3>Press Room</h3>
        </div>
        <div className="copyright">
            <p>@2021 MovieBox by Aderiana Eka PrayUdha</p>
        </div>
    </div>
  )
}

export default Footer