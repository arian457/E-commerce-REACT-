import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'
import Video from './videos/video-2.mp4'
function Hero() {
    return (
        <div className = 'hero-container'>
          <video src={Video} className='video' autoPlay loop muted />
          <h1>What is Lorem Ipsum?</h1>
          <p>Where does it come from?</p>
          
          <div className='hero-btns'>
              <Button className='btns' buttonStyle = 'btn--outline' buttonSize ='btn--large'>EMPEZA YA
              </Button> 
              <Button className='btns' buttonStyle = 'btn--primary' buttonSize ='btn--large'>VER TRAILER <i className = 'far-fa-play-circle'/>
              </Button>


          </div>
        </div>
    )
}

export default Hero
