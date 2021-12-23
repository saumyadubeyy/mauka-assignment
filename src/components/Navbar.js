import React from 'react'
import "../css/Navbar.css"
import logo from '../assets/misc/logo.png'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                 <img src={logo} alt='' />
                 <span className='logo-text'> organic</span>
            </div>
            <ul>
                <li className='home'>Home</li>
                <li>Products</li>
                <li>Blog</li>
                <li>About Us</li>
                <li><button>Contact</button></li>
            </ul>  
        </div>
    )
}

export default Navbar
