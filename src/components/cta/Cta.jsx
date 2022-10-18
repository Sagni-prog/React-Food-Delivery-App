import React, { Component } from 'react'
import './cta.css'

 class Cta extends Component {
  render() {
    return (
      <section className='section-cta'>
         <div className='container-cta'>
             <div className='cta'>
             <div className='cta-text-box'>
                 <h2 className='heading-secondary'>
                     Get your first meal for free
                 </h2>
                 <p className='cta-text'>
                     Healthy, tasty and hassle-free meals are waiting for you. start eating well today.you can cancel or pause anytime. And the first meal os on us
                 </p>

                 <form className='cta-form' action='#'>
                    <div>
                     <label for = "full-name">Full Name</label>
                     <input type='text'  placeholder='John'/>
                     </div>

                     <div>
                     <label for = "email" >Email address</label>
                     <input type='email' placeholder='examle@gmail.com'/>
                     </div>
                     <div>
                     <label for = "selelct-where">Where did you hear from us?</label>
                       <select id='select-where'>
                         <option value= ''>Please choose one option</option>
                         <option value = "friends">Friends and faminly</option>
                         <option value = "youtube">Youtube video</option>
                         <option value = "youtube">Youtube video</option>
                         <option value = "youtube">Youtube video</option>
                         <option value = "youtube">Youtube video</option>
                     </select>
                     </div>
                     <button className='btn-cta'>Sign up now</button>
                 </form>
             </div>
             <div className='cta-img-box' role='img' aria-label = "a lady eating food"></div>
          </div>
         </div>
      </section>
    )
  }
}
export default Cta
