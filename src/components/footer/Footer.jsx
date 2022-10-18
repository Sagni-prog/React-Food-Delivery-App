import React, { Component } from 'react'
import './footer.css'
import facebook from '../../logo/facebook.svg'
import instagram from '../../logo/instagram.svg'
import twitter from '../../logo/twitter.svg'
import {FaInfinity} from 'react-icons/fa'
import {MdOutlineInfinity} from 'react-icons/md'
 class Footer extends Component {
    
  render() {
    return (
       <footer className='footer'>
           
          <div className='container grid-col-5'>
              <div className='logo-col'>
                  <div className='logo'>
                  <a className='footer-logo' href='#'>
                      OMNIF<FaInfinity className='os'/>D
                      
                  </a>
                </div>


              <div className='flex-2'>
                  <ul className='social-links'>
                      <li>
                          <a href='#'>
                              <img src={instagram} className='footer-icon' alt='instagram icon'/> 
                          </a>
                      </li>

                      <li>
                          <a href='#'><img src= {facebook} className='footer-icon' alt='facebook icon'/> 
                          </a>
                      </li>

                      <li className='footer-icon-list'>
                          <a href='#'>
                          <img src= {twitter} className='footer-icon' alt='facebook icon'/> 
                          </a>
                      </li>
                  </ul>
                  <p className='copyright'>Copyright &copy; 2027 by Omnifood, Inc. All right reserved</p>

                  </div>
              </div>
              <div className='address-col'>
                  <p className='footer-heading'>Contact us</p>
                  <address className='contacts'>
                      <p className='address'>623 Harrison St., 2nd floor, San Frsnsisco, CA 94107</p>
                      <p>
                          <a className='footer-link' href='tel:+251-947-10-2017'>+251-947-10-2017</a>
                          <a className='footer-link' href='mailto:sagnialemayehu69@gmail.com'> <br/>
                          sagnialemayehu69@gmail.com
                          </a>
                      </p>
                  </address>
              </div>

              <nav className='nav-col'>
                  <p className='footer-heading'>Company</p>
                  <ul className='footer-nav'>
                      <li><a className='footer-link' href='#'>About Ominfood</a></li>
                      <li><a className='footer-link'  href='#'>For Business</a></li>
                      <li><a className='footer-link'  href='#'>Cooking partners</a></li>
                      <li><a className='footer-link'  href='#'>Careers</a></li>
                  </ul>
              </nav>

              <nav className='nav-col'>
                  <p className='footer-heading'>Account</p>
                  <ul className='footer-nav'>
                      <li><a className='footer-link'  href='#'>Create account</a></li>
                      <li><a className='footer-link'  href='#'>Sign in</a></li>
                      <li><a className='footer-link'  href='#'>ios app</a></li>
                      <li><a className='footer-link'  href='#'>Android app</a></li>
                  </ul>
              </nav>

              <nav className='nav-col'>
                  <p className='footer-heading'>Resources</p>
                  <ul className='footer-nav'>
                      <li><a className='footer-link'  href='#'>Recipe directory</a></li>
                      <li><a className='footer-link'  href='#'>Help center</a></li>
                      <li><a className='footer-link'  href='#'>Privacy & terms</a></li>
                  </ul>
              </nav>
          </div>
       </footer>
    )
  }
}

export default Footer

