import React from 'react';
import './meal.css';
import images from '../../container/images';
import {FaCheck} from 'react-icons/fa'
import {FaHamburger} from 'react-icons/fa'
import {FaNutritionix} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import {FaFire} from 'react-icons/fa'


function Meals() {
  return (
    <div className='meal-section' id='meal'>
      <div className='container'>
        <span className='subheading'>Sample Meals</span>
        <h2 className='heading-secondary'>
            Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className='container grid grid-col-3 no-pad'>
          <div className='meals'>
            <img src={images.banner2} className = 'meal-img' alt=''/>
            <div className='meal-container'>
             <div className='meal-tag'>   
             <span className='tag tag--vegetarian'>Vegetarian</span>
             </div>
             <p className='meal-title'>Japanese Gyozes</p>
             <ul className='meal-attributes'>
               <li className='meal-attribute'><span className='check-icon'><FaFire/></span><strong>650</strong> calories</li>
               <li className='meal-attribute'><span className='check-icon'><FaNutritionix/></span>NutriScore &reg; <strong>4.9</strong></li>
               <li className='meal-attribute'><span className='check-icon'><FaStar/></span><strong>4.9</strong> rating (537)</li>
             </ul>
             </div>
          </div>
          <div className='meals'>
          <img src={images.banner1} className = 'meal-img' alt=''/>
            <div className='meal-container'>
             <div className='meal-tag'>   
             <span className='tag tag--vegan'>Vegetarian</span>
             <span className='tag tag--paleo'>paleo </span>

             </div>
             <p className='meal-title'>Japanese Gyozes</p>
            
             <ul className='meal-attributes'>
               <li className='meal-attribute'><span className='check-icon'><FaFire/></span><strong>650</strong> calories</li>
               <li className='meal-attribute'><span className='check-icon'><FaNutritionix/></span>NutriScore &reg; <strong>4.9</strong></li>
               <li className='meal-attribute'><span className='check-icon'><FaStar/></span><strong>4.9</strong> rating (537)</li>
             </ul>
             </div>
          </div>
        <div className='diets'>
          <h3 className='heading-tertiary'>Works with any diet</h3>
          <ul className='list'>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Vegetarian</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Vegan</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Pescatarian</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Gluten-free</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>keto</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Paleo</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Low FODMAP</li>
            <li className='list-item'><span className = 'check-icon'><FaCheck/></span>Kid-friendly</li>
          </ul>
          </div>
      </div>
      <div className='conatainer all-recipes'>
        <a href='#' className='link'>See all recipes &rarr;</a>
      </div>
    </div>
  )
}
export default Meals