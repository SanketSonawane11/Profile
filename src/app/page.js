'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import Greeting from './Components/Greeting';



function About() {

  const scrollTo = (tag) =>
  {
    const element = document.querySelector(tag);  //ekch function banav and tyala constant madhye store krun 'About' chya jagewr thev
    element.scrollIntoView({ behavior: 'smooth'});
  };

  



  return (
     
      <div className='mainBody'>

        {/* <Greeting/> */}

        <div className='firstInfo'>

        <div className='navbarMain'>
    
          <div className='navbar'>

            <ul className='navbarLinks'>

              <li onClick={()=>
              {
                scrollTo('.about')
              }}>About</li>

              <li onClick={()=>{
                scrollTo('.techStack')
              }}>Tech Stack</li>


              <li onClick={()=>{
                scrollTo('.projects')
              }}>Projects</li>

              <li onClick={()=>{
                scrollTo('.achievements')
              }}>Achievements</li>

              <li onClick={()=>{
                scrollTo('.contact')
              }}>Contact</li>

            </ul>

          </div>
        
        </div>

        </div>

        <div className='about'>

          Arrived?

        </div>


      </div>
    
  )
}

export default About