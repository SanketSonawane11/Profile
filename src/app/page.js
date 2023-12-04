'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap';


function About() {

  const aboutScroll = () =>
  {
    const ele = document.getElementsByClassName('About');  //ekch function banav and tyala constant madhye store krun 'About' chya jagewr thev
    Element.scrollIntoView({ behaviour: 'smooth'});
  };

  useEffect( ()=>
  {

    const t = gsap.Timeline();

    t.from(".pageOne", {backgroundColor: 'black', duration: 1})
    .to(".pageOne", {backgroundColor: 'transparent', duration: 10})

    .from(".nameText", {color: 'white', x: -1000, duration: 1})
    .to(".nameText", {color: 'black', x:0,  duration: 4})

    .to(".subText", {y: '3vw', duration: 4});

  }, []);



  return (
    
    <div className='main'>

      <div className='pageOne'>

        <div className='nameText'>
        <h1 className='mainText'>Sanket Sonawane's</h1>
        <h1 className='subText'>Portfolio</h1>
        </div>

      </div>

    </div>

  )
}

export default About