import React from 'react'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import next from '../assets/next.png'
import typescript from '../assets/typescript.png'



const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-400 w-full h-screen' >
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full py-16'>
            <div>
                <p className='text-4xl text-gray-400 py-4 border-b-4 border-gray-200'>Doświadczenie</p>
                <p className='py-4'>Posługuje się następującymi technologiami:</p>
            </div>
            <div className='grid grid-cols-2 w-full sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={html} alt="html" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={js} alt="js" className='w-20 mx-auto'/>
                    <p className='my-4'>JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={react} alt="react" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={css} alt="css" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
            </div>
        </div>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full'>
            <div>
                <p className='text-4xl text-gray-400 py-4 border-b-4 border-gray-200'>Nauka</p>
                <p className='py-4'>Obecnie uczę się następujących technologii:</p>
            </div>
            <div className='grid grid-cols-2 w-full sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={typescript} alt="typescript" className='w-20 mx-auto'/>
                    <p className='my-4'>Typescript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={next} alt="next" className='w-20 mx-auto'/>
                    <p className='my-4'>Next</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills