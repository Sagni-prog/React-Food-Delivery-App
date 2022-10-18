import React from 'react'
import './hero.css';
import images from '../../container/images'
import Header from '../header/Header'

function Hero() {
  return (
        <section className='section-hero'>
            <Header/>
         <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">
                    A healthy meal delivered to your door, every single day
                </h1>
             <p className="hero-desctiotion">
                 The smart 365-day-per-year food subscription that make you eat healthy again. Tailored to your pesonal testes and nutritional needs. 
             </p>
        <a href="#" className="btn btn--1">Start eating well</a>
       <a href="#" className="btn btn--2">Learn more &darr;</a>
       <div className="delivered-meal">
           <div className="delivered-img">
                 <img src= {images.image_2}  alt = "image2" className='customer-photo'/>
                 <img src= {images.image_3} className='customer-photo' alt=''/>
                 <img src= {images.person_1} className='customer-photo' alt=''/>
                 <img src= {images.person_2} className='customer-photo' alt=''/>
                 <img src= {images.person_3} className='customer-photo' alt=''/>
                 <img src= {images.person_4} className='customer-photo' alt=''/>
           </div>
           <p className="delivered-text"><span>250,000+</span> meals delivered last year!</p>
       </div>
            </div>
            <div className='img-box'>
                <img src= {images.bg} className = "hero-img" alt=''/>
            </div>
        </div>
    </section>   
  )
}

export default Hero