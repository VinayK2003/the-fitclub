import React from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="Header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='Header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header