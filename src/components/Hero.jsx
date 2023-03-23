import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
const Hero = () => {
  return (
    <div className="Hero">
      <div className="left-h">
        <Header />
        {/* The Best Ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club In The Town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div><span>Ideal Body</span></div>
          <div><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* her-buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
           <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />

        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
        <div><span>Calories Burned</span><span>220 kcals</span></div>  
        </div>
      </div>
    </div>
  )
}

export default Hero