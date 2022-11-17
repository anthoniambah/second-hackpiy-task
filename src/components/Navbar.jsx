import React from 'react'
import "./Navbar.css"

// Images
import image1 from '../assests/image1.png';

export const Navbar = () => {
  return (
    <div className="navbarcon">
      <nav className='nav'>
      <img src= {image1} alt="" width={130} />
      <div className='btnnav'>
        <button>Services <i class="fa-solid fa-caret-down"></i></button>
        <button>Technology <i class="fa-solid fa-caret-down"></i></button>
        <button> Products <i class="fa-solid fa-caret-down"></i></button>
        <button><a href="#">Token</a></button>
        <button>Support <i class="fa-solid fa-caret-down"></i></button>
        <button><a href="#">Blog</a></button>
      </div>
      <><button className='signup'>Sign up for free</button></>
      <><button className='light'><i class="fa-regular fa-sun"></i></button></>
      </nav>
    </div>
  )
}