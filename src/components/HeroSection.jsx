import React from 'react'
import {DiReact} from 'react-icons/di'

const HeroSection = () => {
  return (
    <>
      <section className='w-full h-[50vh] bg-gray-500 flex items-center justify-center text-center'>
        <div>
            <h1 className='text-4xl'>Hello, I am Samsaam.</h1>
            <p className='font-mono text-lg'>I am a <span className='inline-flex items-center'>React JS <DiReact/></span> Developer!</p>
        </div>
      </section>
    </>
  )
}

export default HeroSection
