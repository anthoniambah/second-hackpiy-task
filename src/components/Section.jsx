import React from "react"
import "./Section.css"

// Images
import ncc from '../assests/ncc.png';
import navdesk from '../assests/navdesk.png'

export const Section = () => {
  return (
    <div className="section">
        <div className="firstdiv">
        <div className="first-1">
          <h1>Earn Money When You <br /> Share Your Hotspot.</h1>
          <p>Resell data at your rate and mine Wicrypt Network <br /> Tokens $WNT when you or others connect to your <br /> hotspot.</p>
          <br />
          <div className="firstbtn">
            <button className='fbtn-1'>Download App</button>
            <button className='fbtn-2'>Order a Hub</button>
            <br />
            <br />
            <br />
            <img src= {ncc} alt="" width={50} />
            <sup>NCC Approved</sup>
          </div>
        </div>
        <div className="first-2">
          <img src= {navdesk} alt="" />
        </div>
      </div>
    </div>
  )
}