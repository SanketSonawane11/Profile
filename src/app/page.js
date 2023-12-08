'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap';
import Navbar from './Components/Navbar';



function About() {

  const aboutScroll = () =>
  {
    const ele = document.getElementsByClassName('About');  //ekch function banav and tyala constant madhye store krun 'About' chya jagewr thev
    Element.scrollIntoView({ behaviour: 'smooth'});
  };

  // useEffect(() => {
  //   // const t = gsap.timeline();

  //   // t
  //     gsap.from(".name", {duration: 1, opacity: 0, y: '-100%' })

  //     gsap.to('.name', {duration: 1, opacity: 1, y: 0, ease: "back.out(1.7)" })

  //     gsap.from(".subText", {duration: 1, opacity: 0, y: '-100%'})

  //     gsap.to('.subText', {duration: 1, opacity: 1, y: 0, ease: "back.out(1.7)"})

  //     gsap.to('.main', {delay: 2.3, duration: 1.8, y: '-100%', scale: 0.959, borderBottomLeftRadius: '40%', borderBottomRightRadius: '40%', ease: "expo.out"});
  //     }, []);



  return (
    
    <div className='mainBody'>

      <div className='main'>

        <h1 className='name'> Sanket Sonawane's</h1>

        <h2 className='subText'> Portfolio </h2>

        <div className='greet'>

          <h4 className='english'> Hello </h4>
          <h4 className='hindi'> नमस्ते </h4>
          <h4 className='tamil'> வணக்கம் </h4>
          <h4 className='punjabi'> ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ </h4>
          <h4 className='marathi'> नमस्कार </h4>

        </div>

      </div>

      <div className='firstInfo'>

         <Navbar />

      </div>



    </div>

  )
}

export default About