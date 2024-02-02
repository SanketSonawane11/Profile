import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SiAboutdotme } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { MdWebStories } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdContacts } from "react-icons/md";


function Navbar() {

    const scrollTo = (section) => {
        const element = document.querySelector(section);  //ekch function banav and tyala constant madhye store krun 'About' chya jagewr thev
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const aboutRef = useRef(null);
    const techStackRef = useRef(null);
    const projectsRef = useRef(null);
    const achievementsRef = useRef(null);
    const contactRef = useRef(null);

    const handleEffect = (ref) => {

        const xD = gsap.quickTo(ref.current, 'x', {
            duration: 0.2,
            ease: "back.out(1.7)",
        })

        const yD = gsap.quickTo(ref.current, 'y', {
            duration: 0.2,
            ease: "back.out(1.7)",
        })

        const mouseMove = (event) => {
            const { clientX, clientY } = event;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = (clientX - left - width / 4) / 3;
            const y = (clientY - top - height / 4) / 3;
            xD(x);
            yD(y);
        }

        const mouseLeave = (event) => {
            xD(0);
            yD(0);
        }

        ref.current.addEventListener('mousemove', mouseMove);
        ref.current.addEventListener('mouseleave', mouseLeave);

        return () => {
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
        <div className='navbarMain'>

            <div className='navbar'>

                <ul className='navbarLinks'>

                    <li ref={aboutRef} onClick={() => {
                        scrollTo('.about')
                    }}><p>About</p> <SiAboutdotme />

                    </li>

                    <li ref={techStackRef} onClick={() => {
                        scrollTo('.techStack')
                    }}><p>Tech Stack</p><MdDeveloperMode />
                    </li>


                    <li ref={projectsRef} onClick={() => {
                        scrollTo('.projects')
                    }}><p>Projects</p><MdWebStories />
                    </li>

                    <li ref={achievementsRef} onClick={() => {
                        scrollTo('.achievements')
                    }}><p>Achievements</p><GiLaurelsTrophy />
                    </li>

                    <li ref={contactRef} onClick={() => {
                        scrollTo('.contact')
                    }}><p>Contact</p><MdContacts />
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Navbar