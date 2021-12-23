import React from 'react'
import '../css/Blog.css'
import G114 from '../assets/welcome/G114.png'
import Blog1 from '../assets/blog/Blog1.png'
import Blog2 from '../assets/blog/Blog2.png'
import Blog3 from '../assets/blog/Blog3.png'

const Blog = () => {
    return (
        <div className='blog'>
            <img src={G114} alt='' />
            <h3>Read our Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
            <div className='blogs'>
                <div className='blog-child'>
                    <img src={Blog1} alt='' />
                    <h4>Blog Post One</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.</span><br/>
                    <button>Read More</button>
                </div>
                <div className='blog-child'>
                    <img src={Blog2} alt='' />
                    <h4>Blog Post One</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.</span><br/>
                    <button>Read More</button>
                </div>
                <div className='blog-child'>
                    <img src={Blog3} alt='' />
                    <h4>Blog Post One</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.</span><br/>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Blog
