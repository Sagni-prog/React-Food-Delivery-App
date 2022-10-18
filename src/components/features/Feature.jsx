import React from 'react'
import './feature.css'
import {FaApple} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'
import {FaLeaf} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'
import {MdOutlinePause} from 'react-icons/md'


 function Feature() {
  return (
    <section className='section-feature'>
        <aside className='plan-detail'>
            Prices include all applicable taxes. You can cancel at anytime Both plan include the following:
        </aside>
        <div className='container grid-col-4'>

            <div className='feature'> 
            <FaClock className = 'feature-icon'/>
            <p className='feature-title'>Never cook again</p>
            <p className='feature-text'>
                Our subscription cover 365 days per, even inluding major holiday
            </p>
          </div>

          <div className='feature'> 
          <FaApple className = 'feature-icon'/>
            <p className='feature-title'>Local and Organic</p>
            <p className='feature-text'>
                 Our cooks only use local, fresh, organic products to prepare your meals
            </p>
          </div>

          <div className='feature'> 
          <FaLeaf className = 'feature-icon'/>
            <p className='feature-title'>No waste</p>
            <p className='feature-text'>
                All our partners only use reusable container to package all your meals
            </p>
          </div>

          <div className='feature'> 
          
          <MdOutlinePause className = 'feature-icon'/> 
            <p className='feature-title'>Pause anytime</p>
            <p className='feature-text'>
                Going on vacation? just pause your subsctription, and we refund unused days.
            </p>
          </div>
        </div>
    </section>
  )
}
export default Feature