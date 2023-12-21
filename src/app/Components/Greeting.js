import React, { useEffect } from 'react'
import gsap from 'gsap'

function Greeting() {


    useEffect(() => {

            gsap.from(".name", {
              duration: 1, 
              opacity: 0, 
              y: '-100%' 
            })
      
            gsap.to('.name', {
              duration: 1, 
              opacity: 1, 
              y: 0, 
              ease: "back.out(1.7)" 
            })
      
            gsap.from(".subText", {
              duration: 1, 
              opacity: 0, 
              y: '-100%'
            })
      
            gsap.to('.subText', {
              duration: 1, 
              opacity: 1, 
              y: 0, 
              ease: "back.out(1.7)"
            })
      
            // English text

            gsap.to('.greet',{
              opacity: 1,
              duration: 0.1
            })
      
            gsap.from(".english", {
              duration: 0.5,
              opacity: 0,
              x: '-20%',
              ease: "power3.out",
            });
            
            gsap.to('.english', {
              duration: 0.5,
              opacity: 1,
              x: 0, 
              ease: "power3.out",
              delay: 1, 
            });
            
            gsap.to('.english', {
              duration: 0.5,
              opacity: 0,
              x: '10%', 
              ease: "power3.out",
              delay: 2,
            });
      
            // Hindi Text
      
            gsap.from(".hindi", {
              duration: 0.5,
              opacity: 0,
              x: '-20%',
              ease: "power3.out",
            });
            
            gsap.to('.hindi', {
              duration: 0.5,
              opacity: 1,
              x: 0, 
              ease: "power3.out",
              delay: 2.1, 
            });
            
            gsap.to('.hindi', {
              duration: 0.5,
              opacity: 0,
              x: '10%', 
              ease: "power3.out",
              delay: 3.2,
            });
      
            // Tamil Text
      
            gsap.from(".tamil", {
              duration: 0.5,
              opacity: 0,
              x: '-20%',
              ease: "power3.out",
            });
            
            gsap.to('.tamil', {
              duration: 0.5,
              opacity: 4,
              x: 0, 
              ease: "power3.out",
              delay: 3.2, 
            });
            
            gsap.to('.tamil', {
              duration: 0.5,
              opacity: 0,
              x: '10%', 
              ease: "power3.out",
              delay: 4.2,
            });
      
            // Punjabi Text
      
            gsap.from(".punjabi", {
              duration: 0.5,
              opacity: 0,
              x: '-20%',
              ease: "power3.out",
            });
            
            gsap.to('.punjabi', {
              duration: 0.5,
              opacity: 1,
              x: 0, 
              ease: "power3.out",
              delay: 4.4, 
            });
            
            gsap.to('.punjabi', {
              duration: 0.5,
              opacity: 0,
              x: '10%', 
              ease: "power3.out",
              delay: 5.4,
            });
      
            // Marathi Text
      
            gsap.from(".marathi", {
              duration: 0.5,
              opacity: 0,
              x: '-20%',
              ease: "power3.out",
            });
            
            gsap.to('.marathi', {
              duration: 0.5,
              opacity: 1,
              x: 0, 
              ease: "power3.out",
              delay: 5.5, 
            });
            
            gsap.to('.marathi', {
              duration: 0.5,
              opacity: 0,
              x: '10%', 
              ease: "power3.out",
              delay: 6.5,
            });
      
            gsap.to('.main', {delay: 6.9, duration: 1.8, y: '-100%', scale: 0.959, borderBottomLeftRadius: '7vw', borderBottomRightRadius: '7vw', ease: "expo.out"});
            }, []);

  return (
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
  )
}

export default Greeting