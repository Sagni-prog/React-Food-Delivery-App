import React from 'react'
import './guide.css'
import images from '../../container/images'

function Guide(){
    return (
    <div className='how' id = 'how'>
        <div className='container'>
            <span className='subheading'>How it works</span>
            <h2 className='heading-secondary'>
                Your daily dose of healthy in 3 steps
            </h2> 
        </div>
 
        <div className='step-box'>
            <div className='container grid grid-col-2 grid--center-v'>
                {/* STEP 01 */}
                <div className='step-text-box'>
                    <p className='step-number'>01</p>
                 <h3 className='heading-tertiary'>
                     Tell us what you like (and what not)
                 </h3>
                 <p className='step-desctiption'>
                     Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
                 </p>
                 </div>

             <div className='step-img-box img-1'>
                <img src= {images.step_1} className = 'step-img' alt=''/>
            </div>
       
            {/* STEP 02 */}
            <div className='step-img-box img-2'>
                <img src= {images.step_2} className = 'step-img' alt=''/>
            </div>
           
            <div className='step-text-box'>
            <p className='step-number'>02</p>
               <h3 className='heading-tertiary'>
                     Tell us what you like (and what not)
                 </h3> 
                 <p className='step-desctiption'>
                     Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
                 </p>
                 </div>
                   {/* STEP 03 */}
                <div className='step-text-box'>
                <p className='step-number'>03</p>
                 <h3 className='heading-tertiary'>
                     Tell us what you like (and what not)
                 </h3>
                 <p className='step-desctiption'>
                     Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!
                 </p>
                 </div>
         {/* <div className='contai-both'>   */}
             <div className='step-img-box img-3'>
                <img src= {images.step_3} className = 'step-img' alt=''/>
            </div>
            {/* <div className='back-circle'></div>
        </div> */}
            </div>
        </div>
    </div>
    )
}

export default Guide;