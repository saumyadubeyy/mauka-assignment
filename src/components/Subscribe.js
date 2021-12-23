import React from 'react'
import '../css/Subscribe.css'

const Subscribe = () => {
    return (
            <div className='subscribe'>
                <h3 className='subscribe-text'>Subscribe to our Newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
                <div className='input'>
                    <input type='email' placeholder='Enter your email address' />
                    <button>Subscribe</button>
                </div>
            </div>
    )
}

export default Subscribe
