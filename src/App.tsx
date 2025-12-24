import { useEffect, useRef } from 'react';
import './index.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import PersonalProject from "../components/PersonalProject"
import Technology from "../components/Technology"
import { projects } from "../data/projectData"
import { technologies } from '../data/technologies';

function App() {
  const title = useRef(null)
  const arrow = useRef(null)
  const header = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  useEffect(() => {

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.3,
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
        start: "100 top",
        end: "350 top",
        scrub: true
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
            <h1 ref={title} className='text-[#4B2814] text-center font-bold'>JOVANY VALENZUELA</h1>
            <h1 className='text-[#4B2814] text-center text-7xl mt-4'>Frontend Developer</h1>
            <img src="./assets/images/arrow.svg" alt="arrow" ref={arrow} className='rotate-180 w-16 absolute bottom-32 opacity-60' />
          </header>


          {/* About me section */}
          <div className='flex gap-8 justify-center mt-152 w-full bg-[#4B2814] p-5 py-15 md:p-32 flex-col-reverse xl:flex-row'>
            <div className='w-full justify-center content-center'>
              <img src="images/mss.png" alt="portrait" className='w-230 h-230 mx-auto object-cover top-0 object-top' />
            </div>
            <div className='w-[90%] self-center flex flex-col'>
              <div >
                <h3 className='text-4xl md:text-7xl mb-2'>About me</h3>
                <p className='text-2xl md:text-4xl xl:text-5xl leading-normal'>My name is <span className='text-red-400'>Jovany Valenzuela Gambino</span>, i am a United States Citizen / Mexico Citizen and a frontend developer passionate about web development and user interface design.
                  I mainly work with technologies like <span className='text-yellow-200'>JavasScript</span>, <span className='text-blue-400'>TypeScript</span>, <span className='text-blue-200'>React</span>, <span className='text-neutral-400'>NextJs</span>, <span className='text-green-300'>NodeJs</span>, <span className='text-orange-300'>SQL</span> and others.<br />
                  I am currently studying Software Engineering at university and i have been studying software development on my own since 2023.<br />
                  {/* My current goal is to find a company where I can start and grow a career as a professional frontend/fullstack developer, be part of a team, and continue improving myself as a developer. */}
                </p>
              </div>
            </div>
          </div>

          {/* Projects section */}
          <div className='flex flex-col mt-140'>
            <h2 className='text-5xl p-8 rounded-full bg-[#4B2814] mx-auto mb-20'>Personal Projects</h2>
            <div className='flex flex-col lg:flex-row justify-center gap-20 w-[95%] self-center mb-100'>
              {
                projects.map(p => {
                  return (
                    <PersonalProject
                      key={p.id}
                      title={p.name}
                      description={p.description}
                      img={p.img}
                      gitRepo={p.gitRepo}
                      url={p.url}
                      technologies={p.technologies}
                    />
                  )
                })
              }
            </div>
          </div>

          {/* Skills section */}
          <div className='flex flex-col mt-80'>
            <h2 className='text-5xl p-8 rounded-full bg-[#4B2814] mx-auto mb-20'>Skills</h2>
            {/* Technologies container */}
            <div className=' h-auto lg:w-400 w-[95%] mx-auto flex gap-6 rounded-3xl bg-linear-to-b from-gray-300 via-gray-100 to-gray-300 p-12 border-gray-400 border-2 shadow-[0_2px_6px_rgba(0,0,0,0.3)]'>
              <div className='w-full  gap-12 grid lg:grid-rows-3 grid-rows-5 lg:grid-cols-5 grid-cols-3 justify-items-center'>
                {technologies.map((t) => {
                  return (
                    <Technology
                      key={t.name}
                      name={t.name}
                      img={t.img} />
                  )
                })}
              </div>
            </div>
            {/* Skills container */}
            <div className='lg:w-400 grid w-[95%] lg:grid-cols-2 mt-6 items-center mx-auto text-neutral-600 text-4xl text-center lg:gap-6 gap-3'>
              <p className='bg-linear-to-r from-gray-300 via-gray-100 to-gray-300
              border border-gray-400 shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-8 rounded-2xl'>UX/UI</p>
              <p className='bg-linear-to-r from-gray-300 via-gray-100 to-gray-300
              border border-gray-400 shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-8 rounded-2xl'>Responsive Design</p>
              <p className='bg-linear-to-r from-gray-300 via-gray-100 to-gray-300
              border border-gray-400 shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-8 rounded-2xl'>API REST</p>
              <p className='bg-linear-to-r from-gray-300 via-gray-100 to-gray-300
              border border-gray-400 shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-8 rounded-2xl'>Databases</p>
              <p className='bg-linear-to-r from-gray-300 via-gray-100 to-gray-300
              border border-gray-400 shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-8 rounded-2xl'>English B2/C1</p>
              <p className='bg-linear-to-r from-gray-300 via-gray-100 to-gray-300
              border border-gray-400 shadow-[0_2px_6px_rgba(0,0,0,0.3)] p-8 rounded-2xl'>Spanish Native</p>
            </div>

            {/* Education section */}
            <h2 className='text-5xl p-8 rounded-full bg-[#4B2814] mx-auto mb-20 mt-80'>Education</h2>
            <div className='mx-auto'>
              <a href='https://uveg.edu.mx/index.php/es/info-ids' target='blank' className='bg-linear-to-b from-[#D1F5FF] via-[#BDCFFF] via-85% to-[#A6B8FF] flex flex-col md:h-210 h-160 lg:w-380 xl:w-490 w-[95%] mx-auto p-8 text-white rounded-4xl
              text-center justify-center gap-6 text-shadow-black/20 text-shadow-md border-4 border-neutral-50'>
                <h3 className='md:text-7xl text-6xl'>University</h3>
                <p className='md:text-6xl text-4xl dotted text-yellow-100' rel="noopener noreferrer">Universidad Virtual del Estado de Guanajuato</p>
                <p className='md:text-6xl text-4xl'>Software Engineering</p>
                <p className='md:text-5xl text-3xl md:p-4 p-2 bg-black/15 rounded-lg inline-block mx-auto'>3.7 GPA</p>
                <p className='md:text-4xl text-2xl mt-4'>April [2024] - December [2026]</p>

                <div className='mx-auto mt-8'>
                  <img src="assets/icons/university.svg" alt="university icon" className='md:w-50 w-25' />
                </div>
              </a>
              <div>
                <h3></h3>
              </div>
            </div>

            {/*Objetive section*/}
          </div>
        </div>
      </div >
    </>
  )
}

export default App
