import React, { Component } from 'react';
import './pricing.css'
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa'

 class Pricing extends Component {
  render() {
    return (
     <section className='section-pricing'>
       <div className='pricing-container'>
         <div className='container'>
            <span className='subheading'>Pricing</span>
            <h2 className='heading-secondary'>
               Eating well without breaking the bank
            </h2> 
        </div>  
        <div className='grid grid-col-2 gap'>
            <div className='pricing-plan justfy-end pricing-plan-starter'>
              <div class className = 'çol-1'>
               <p className='plan-name'>Starter</p>
               <p className='plan-price'><span>$</span>399</p>
            <p className='plan-text'>per month, That's just $13 per meal!</p>
            </div>
           <ul className='list'>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Order from 11am to 9am</li>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span>1 meal per day</li>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Delivery is free</li>
               <li className='list-item'><span className = 'check-icon'><FaTimes color='red'/></span></li>
          </ul>
          <a href="#" className="btn--1">Start eating well</a>
        
            </div>
            <div className='pricing-plan justfy-end pricing-plan-complete'>
            <div class className = 'çol-1'>
               <p className='plan-name'>Complete</p>
               <p className='plan-price'><span>$</span>649</p>
            <p className='plan-text'>per month, That's just $13 per meal!</p>
            </div>
            
           <ul className='list'>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span><strong>2 meal</strong> per day</li>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Order <strong>24/7</strong></li>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Delivery is free</li>
               <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Get access to latest recipes</li>
          </ul>
          
          <a href="#" className="btn--1">Start eating well</a>
            </div>
          </div>
        </div>
     </section>
    )
  }
}
export default Pricing;
