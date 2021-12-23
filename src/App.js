import React from 'react'
import './App.css'
import Homepage from './components/Homepage'
import JaneDoe from './components/JaneDoe'
import PresentedBy from './components/PresentedBy'
import Subscribe from './components/Subscribe'
import Welcome from './components/Welcome'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
          <Homepage />
          <Welcome />
          <PresentedBy />
          <JaneDoe />
          <Subscribe />
          <Blog />
          <Footer />
      </div>
  )
}

export default App

