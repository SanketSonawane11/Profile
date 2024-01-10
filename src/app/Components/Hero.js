'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'


function Hero() {

    const ref = useRef(null);

    // useEffect(() => {

    //     const xD = gsap.quickTo(ref.current, 'x', {
    //         duration: 0.2,
    //         ease: "back.out(1.7)",
    //     })

    //     const yD = gsap.quickTo(ref.current, 'y', {
    //         duration: 0.2,
    //         ease: "back.out(1.7)",
    //     })

    //     const mouseMove = (event)=>
    //     {
    //         const { clientX, clientY } = event;
    //         const {width, height, left, top} = ref.current.getBoundingClientRect();
    //         const x = clientX - 2 * (left + width/2);
    //         const y = clientY - 2 * (top + height * 0.5);
    //         xD(x);
    //         yD(y);
    //     }

    //     const mouseLeave = (event)=>
    //     {
    //         xD(0);
    //         yD(0);
    //     }
      
    //     ref.current.addEventListener('mousemove', mouseMove);
    //     ref.current.addEventListener('mouseleave', mouseLeave);

    //     return () =>
    //     {
    //         ref.current.removeEventListener('mousemove', mouseMove);
    //         ref.current.removeEventListener('mouseleave', mouseLeave);

    //     }

    // }, [])
    

  return (
    <div className='heroMain'>

        <div className='heroImage'></div>

    </div>
  )
}

export default Hero