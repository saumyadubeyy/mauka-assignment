import React from 'react'
import '../css/Footer.css'
import bnwLogo from '../assets/misc/bnw-logo.png'
import G229 from '../assets/misc/G229.png'
import facebook from '../assets/followUs/facebook.png'
import linkedIn from '../assets/followUs/linkedIn.png'
import instagram from '../assets/followUs/instagram.png'

const Footer = () => {
    return (
            <footer>
                <img src={G229} alt='' className='wave'/>
                <div className='footer'>
                    <div className='left'>
                        <img src={bnwLogo} alt='' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <div>© Copyright 2020 Nature</div>
                    </div>
                    <div className='centre'>
                        <h3>Information</h3>
                        <div className='centre-text'>
                            <div>About Us</div>
                            <div>Products</div>
                            <div>Contact Us</div>
                            <div>Terms of Service</div>
                        </div>
                    </div>
                    <div className='right'>
                        <h3>Follow Us</h3>
                        <div className='right-container'>
                            <img src={facebook} alt='' />
                            <img src={linkedIn} alt='' />
                            <img src={instagram} alt='' />
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
