import React from 'react'
import '../css/Homepage.css'
import Navbar from './Navbar'
import flower from '../assets/misc/flower.png'
import bigLogo from '../assets/misc/logo-big.png'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <div className='healthy-container'>
                <div className='healthy-life'>
                    <span className='healthy-life-with'>Healthy life with</span>
                    <br/>
                    <span className='nature-organic'>Nature Organic</span>
                    <p>Vegetables are the edible parts of a plan that are used in cooking or can be eaten raw</p>
                    <button className='explore'>Explore Now</button>
                </div>
                <div className='images'>
                    <img src={bigLogo} alt='' className='big-logo'/>
                    <img src={flower} alt='' className='flower' />
                </div>
            </div>
        </div>
    )
}

export default Homepage
