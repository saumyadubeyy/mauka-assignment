import React from 'react'
import '../css/Welcome.css'
import G114 from '../assets/welcome/G114.png'
import G207 from '../assets/welcome/G207.png'
import G205 from '../assets/welcome/G205.png'

const Welcome = () => {
    return (
        <div className='welcome'>
            <img src={G114} alt='' />
            <h3>Welcome to Nature</h3>
            <p className='welcome-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
            <div className='cards'>
                <div className='card'>
                    <img src={G207} alt='' />
                </div>
                <div className='card'>
                    <img src={G205} alt='' />
                </div>
                <div className='card'>
                    <img src={G207} alt='' />
                </div>
                <div className='card'>
                    <img src={G207} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Welcome

