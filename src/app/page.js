'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap';


function About() {

  const aboutScroll = () =>
  {
    const ele = document.getElementsByClassName('About');  //ekch function banav and tyala constant madhye store krun 'About' chya jagewr thev
    Element.scrollIntoView({ behaviour: 'smooth'});
  };

  useEffect(() => {
    gsap.to('.main', {delay: 1, duration: 1.8, y: '-100%', scale: 0.959, borderBottomLeftRadius: '4vw', borderBottomRightRadius: '4vw', ease: "expo.out"});
      }, []);



  return (
    
    <div className='mainBody'>

      <div className='main'>

        <h1 className='name'> Sanket Sonawane's</h1>

        <h2 className='subText'> Portfolio </h2>

      </div>

      

    </div>

  )
}

export default About