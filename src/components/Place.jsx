import React from 'react'
import {DiReact} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {SiCplusplus} from 'react-icons/si'
import {TbStack3} from 'react-icons/tb'
import {BiMobileAlt} from 'react-icons/bi'
import {SiFlutter} from 'react-icons/si'

const Place = () => {
  return (
    <div className='m-4' id="place">
            <section className="text-white bg-gray-900 rounded-lg">
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What makes me special?</h2>
            <p className="mt-4 text-gray-300">
             I will provide you good quality work and responsive Web and App i have great experience in development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
            <DiReact/>
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-bold">React Developer.</h2>
                <p className="mt-1 text-sm text-gray-300">
                 I am an experienced React JS Developer, and I have been developing for a long time, with complex web applications and features implementations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              <DiJava className='text-xl'/>
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-bold">Java Native App.</h2>
                <p className="mt-1 text-sm text-gray-300">
             Also, I am a Java Android App Developer with great experience in UI/UX App development and database integration.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                <SiCplusplus/>
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-bold">C++.</h2>
                <p className="mt-1 text-sm text-gray-300">
                C++ is my one the best skills and assets which I have been serving as a freelancer in game & app development.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
               <TbStack3/>
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-bold">Full Stack Developer.</h2>
                <p className="mt-1 text-sm text-gray-300">
                  I am a full stack JavaScript web app developer with a nice portfolio in latest technologies like React, NodeJS and other JavaScript based modules.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              <BiMobileAlt className='text-xl'/>
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-bold">App Developer</h2>
                <p className="mt-1 text-sm text-gray-300">
I am an app developer both cross platform and individual development platforms like IOS and android.                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                <SiFlutter/>
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-bold">Cross Platform Development.</h2>
                <p className="mt-1 text-sm text-gray-300">
                As in app development, I can develop cross platform applications by React Native with fine features and modern UI.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Place
