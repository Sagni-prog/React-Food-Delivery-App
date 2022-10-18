import React , {useState} from 'react'
import './header.css'
import logo from '../../logo/right-hub.svg'
import { FaBars } from 'react-icons/fa';
import {FaSun} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { render } from '@testing-library/react';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {FaFacebookSquare} from 'react-icons/fa'



function Header() {
    
  const [toggleMenu,setToggleMenu] = useState(false)
  // const  toggle = ()=>{
  //   if(toggleMenu){
  //     setToggleMenu(false)
  //   }
  //   else{
  //     setToggleMenu(true)
  //   }
  //   console.log(toggleMenu)
  // }

  const style = {
    transition: 'all 2s'
  }
  return (
      <header className='header'>
        <div className='header-container'>
          <MdOutlineRestaurantMenu className = 'logo'/> 
           {/* <img src={FaSun} className = 'logo'  alt='logo'/> */}
             <nav className='main-nav'>
                 <ul className='main-nav-lists'>
                    <li className='main-nav-links'><a href='#how'>How it works</a></li>
                    <li className='main-nav-links'><a href='#'>Meals</a></li>
                    <li className='main-nav-links'><a href='#'>Pricing</a></li>
                    <li className='main-nav-links'><a href='#'>Testimonials</a></li>
                    <li className='main-nav-links'><a href='#'>Try for free</a></li>         
                </ul>
             </nav>
         {!toggleMenu && (
             <button className = 'btn-mobile-nav'>
                <FaBars className='icon-mobile-nav' onClick={()=> setToggleMenu(true ) } />
             </button> 
         )}           

         </div>
         {toggleMenu && (
            <nav className='toggle-nav' style = {style}>
           <div className='menu-on-toggle'>
           <MdOutlineRestaurantMenu className = 'toggle-logo'/>
           {/* <FaSun className = 'toggle-logo'/> */}
             <ul className='toggle-nav-lists'>
             <li className='toggle-nav-links'><a href='#'>How it works</a></li>
             <li className='toggle-nav-links'><a href='#'>Meals</a></li>
             <li className='toggle-nav-links'><a href='#'>Pricing</a></li>
             <li className='toggle-nav-links'><a href='#'>Testimonials</a></li>
             <li className='toggle-nav-links'><a href='#'>Try for free</a></li>
          </ul>
          {/* <MdOutlineRestaurantMenu className='icon-close-bar' onClick={()=>  setToggleMenu(false) }/> */}
          <FaTimes className='icon-close-bar' onClick={()=>  setToggleMenu(false) }/>
          </div>
          </nav>
         )}
       
     </header>  
  );
}

export default Header