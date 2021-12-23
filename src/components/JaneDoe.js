import React from 'react'
import '../css/JaneDoe.css'
import janeDoe from '../assets/misc/jane-doe.png'
import G86 from '../assets/misc/G86.png'
import G134 from '../assets/misc/G134.png'

const JaneDoe = () => {
    return (
        <div className='jane-doe'>
            <img src={G86} alt='' /><br />
            <img src={janeDoe} alt='' className='jane-doe-img'/>
            <div className='jane-doe-name'>Jane Doe</div>
            <h2>✰✰✰✰✰</h2> 
            <p className='jane-doe-text'>Thank you for all the amazing produce and products you deliver each week…
            you make my life so easy an bring goodness into our family eating. 
            I’ve been roasting a lot of brussel sprouts and</p>
            <img src={G134} alt='' className='leaves'/>
        </div>
    )
}

export default JaneDoe

