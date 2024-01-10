'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Greeting from './Components/Greeting';
import Hero from './Components/Hero';
import { Righteous } from 'next/font/google';



function About() {

  const scrollTo = (section) =>
  {
    const element = document.querySelector(section);  //ekch function banav and tyala constant madhye store krun 'About' chya jagewr thev
    element.scrollIntoView({ behavior: 'smooth'});
  };

  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  
  const handleEffect =  (ref) => {

    const xD = gsap.quickTo(ref.current, 'x', {
        duration: 0.2,
        ease: "back.out(1.7)",
    })

    const yD = gsap.quickTo(ref.current, 'y', {
        duration: 0.2,
        ease: "back.out(1.7)",
    })

    const mouseMove = (event)=>
    {
        const { clientX, clientY } = event;
        const {width, height, left, top} = ref.current.getBoundingClientRect();
        const x = clientX - left - width/10;
        const y = clientY - top - height/10;
        xD(x);
        yD(y);
    }

    const mouseLeave = (event)=>
    {
        xD(0);
        yD(0);
    }
  
    ref.current.addEventListener('mousemove', mouseMove);
    ref.current.addEventListener('mouseleave', mouseLeave);

    return () =>
    {
        ref.current.removeEventListener('mousemove', mouseMove);
        ref.current.removeEventListener('mouseleave', mouseLeave);
    }

  }

  useEffect(() => {
    
    (aboutRef.current) && handleEffect(aboutRef);
    (techStackRef.current) && handleEffect(techStackRef);
    (projectsRef.current) && handleEffect(projectsRef);
    (achievementsRef.current) && handleEffect(achievementsRef);
    (contactRef.current) && handleEffect(contactRef);
    
  }, [])
  

  return (
     
      <div className='mainBody'>

        {/* <Greeting/>  */}

        <div className='firstDisplay'>

          <div className='firstInfo'>

            <div className='navbarMain'>
        
              <div className='navbar'>

                <ul className='navbarLinks'>

                  <li ref={aboutRef} onClick={()=>
                  {
                    scrollTo('.about')
                  }}>About</li>

                  <li ref={techStackRef} onClick={()=>{
                    scrollTo('.techStack')
                  }}>Tech Stack</li>


                  <li ref={projectsRef} onClick={()=>{
                    scrollTo('.projects')
                  }}>Projects</li>

                  <li ref={achievementsRef} onClick={()=>{
                    scrollTo('.achievements')
                  }}>Achievements</li>

                  <li ref={contactRef} onClick={()=>{
                    scrollTo('.contact')
                  }}>Contact</li>

                </ul>

              </div>
            
            </div>

            <Hero />

          </div>
          
          <div className='about'>

          Arrived?

          </div>

        </div>
      </div>
    
  )
}

export default About