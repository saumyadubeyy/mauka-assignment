import React from 'react'
import '../css/PresentedBy.css'
import G39 from '../assets/presentedBy/G39.png'
import G55 from '../assets/presentedBy/G55.png'
import G64 from '../assets/presentedBy/G64.png'

const PresentedBy = () => {
    return (
        <div className='presented-by'>
            <h3>Proudly Presented By</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</span>
            <div className='paths'>
                <div className='path'>
                    <img src={G39} alt='' />
                </div>
                <div className='path'>
                    <img src={G64} alt='' />
                </div>
                <div className='path'>
                    <img src={G55} alt='' />
                </div>
                <div className='path'>
                    <img src={G39} alt='' />
                </div>
                <div className='path'>
                    <img src={G64} alt='' />
                </div>
            </div>
        </div>
    )
}

export default PresentedBy
