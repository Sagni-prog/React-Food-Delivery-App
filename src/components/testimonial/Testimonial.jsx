import React from 'react';
import './testimonial.css';
import images from '../../container/images';
// import '../../mediaquery/Mediaquery.css';

function Testimonial() {
  return (
    <section>
        <div className='container'>
            <span className='subheading'>Testimonials</span>
            <h2 className='heading-secondary center-text'>
               Once you try it you cant go back
            </h2>  
        </div>  
    <div className='testmonial-container'>
        <div className='testimonials'>
             <figure className='testimonail-figure'>
                 <img src= {images.person_2} className = 'testimonial-img' alt = ''/>
              <blockquote className='testimonial-text'>
                     Inexpensive, healthy and great-testing meal,without even having to order  manually! It feels truly magical.
                 </blockquote>
                 <p className='testimonial-name'>&mdash;Dave Bryson</p>
             </figure> 
             <figure className='testimonail-figure'>
                 <img src= {images.person_1} className = 'testimonial-img' alt = ''/>
                 <blockquote className='testimonial-text'>
                     Inexpensive, healthy and great-testing meal,without even having to order  manually! It feels truly magical.
                 </blockquote>
                 <p className='testimonial-name'>&mdash;Dave Bryson</p>
             </figure> 
             <figure className='testimonail-figure'>
                 <img src= {images.person_3} className = 'testimonial-img' alt = ''/>
                 <blockquote className='testimonial-text'>
                     Inexpensive, healthy and great-testing meal,without even having to order  manually! It feels truly magical.
                 </blockquote>
                 <p className='testimonial-name'>&mdash;Dave Bryson</p>
             </figure> 
             <figure className='testimonail-figure'>
                 <img src= {images.person_4} className = 'testimonial-img' alt = ''/>
                 <blockquote className='testimonial-text'>
                     Inexpensive, healthy and great-testing meal,without even having to order  manually! It feels truly magical.
                 </blockquote>
                 <p className='testimonial-name'>&mdash;Dave Bryson</p>
             </figure> 
        </div>

        <div className='gallery'>
            <figure className='gallery-item'>
                <img src= {images.about_1} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.about_2} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_1} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_2} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_3} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.about_1} className = 'gallery-img' alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.about_2} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_1} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_2} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_3} className = 'gallery-img'  alt = ''/>
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_2} className = 'gallery-img' alt = ''/>                       
            </figure>
            <figure className='gallery-item'>
                <img src= {images.menu_3} className = 'gallery-img'  alt = ''/>
            </figure>
        </div>
    </div>
    </section>
  )
}

export default Testimonial
