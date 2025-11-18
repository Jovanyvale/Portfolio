import { useEffect, useRef } from 'react';
import './index.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import PersonalProject from "../components/PersonalProject"
import { projects } from "../data/projectData"

function App() {
  const title = useRef(null)
  const arrow = useRef(null)
  const header = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  useEffect(() => {

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    gsap.to(arrow.current, {
      y: 20,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    gsap.to(header.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: header.current,
        start: "100 top",   // cuando el contenedor toca el top
        end: "350 top",     // cuando has scrolleado 350px
        scrub: true         // anima suave con el scroll
      }
    })

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      console.log(scrollY);
    });
  }, [])



  return (
    <>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <header ref={header} className='header w-full h-screen flex flex-col justify-center content-center items-center text-8xl font-semibold relative'>
            <h1 ref={title} className='text-[#4B2814] text-center'>JOVANY VALENZUELA</h1>
            <h1 className='text-[#4B2814] text-center text-7xl mt-4'>Web Developer</h1>
            <img src="./assets/images/arrow.svg" alt="arrow" ref={arrow} className='rotate-180 w-16 absolute bottom-32 opacity-60' />
          </header>

          <div className='flex gap-8 justify-center mt-152 w-full bg-[#4B2814] p-32'>
            <div className='w-full justify-center content-center'>
              <img src="images/mss.png" alt="portrait" className='w-180 h-150 mx-auto object-cover top-0 object-top' />
            </div>
            <div className='w-[90%] self-center flex flex-col'>
              <div>
                <h3 className='text-7xl mb-2'>About me</h3>
                <p className='text-4xl leading-normal'>My name is <span className='text-red-400'>Jovany Valenzuela Gambino</span>, i am a United States Citizen / Mexico Citizen and a frontend developer passionate about web development and user interface design.
                  I mainly work with technologies like <span className='text-yellow-200'>JavasScript</span>, <span className='text-blue-400'>TypeScript</span>, <span className='text-blue-200'>React</span>, <span className='text-neutral-400'>NextJs</span>, <span className='text-green-300'>NodeJs</span>, <span className='text-orange-300'>SQL</span> and others.<br />
                  I am a high school graduate and now a university student with half of my degree completed. I have also been studying software development on my own since 2023.<br />
                  My current goal is to find a company where I can start and grow a career as a professional frontend/fullstack developer, be part of a team, and continue improving myself as a developer.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col mt-140'>
            <h2 className='text-5xl p-8 rounded-full bg-[#4B2814] mx-auto mb-20'>Personal Projects</h2>
            <div className='flex w-screen mb-100'>
              {
                projects.map(p => {
                  return (
                    <PersonalProject
                      key={p.id}
                      title={p.name}
                      description={p.description}
                      img={p.img}
                      technologies={p.technologies}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
