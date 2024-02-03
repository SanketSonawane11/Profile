'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Greeting from './Components/Greeting';
import Hero from './Components/Hero';
import { Righteous } from 'next/font/google';
import Navbar from './Components/Navbar';



function About() {


  return (

    <div className='mainBody'>
      <Greeting/> 
      <Navbar />
      <div className='firstDisplay'>
        <div className='firstInfo'>
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