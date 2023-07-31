'use client'

import { useRef } from 'react';
import Image from 'next/image';
import useFadeIn from '@/components/FadeIn';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export default function Home() {
  
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useFadeIn(ref1);
  useFadeIn(ref2);


  return (
    <>
      <div className='text-center text-white'>
        
        <h1 className='hidden md:block py-4 sm:text-5xl md:text-7xl sm:py-5 font-jost'>
          ROSEMOND FILMS
        </h1>
        
        <div className='flex justify-center items-center font-jost'>
          <div className='z-10 text-3xl md:text-4xl lg:text-6xl absolute md:w-[50rem] w-[25rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <svg className="fill-white z-10 h-16 w-16 mt-64 md:h-20 md:w-20 absolute md:mt-96 float_arrow" 
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"> 
            <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path> 
          </svg>

          
          <video autoPlay loop muted className='z-0 h-[45rem] object-cover md:h-auto md:scale-100 w-full brightness-[0.80] overflow-hidden'>
            <source src='/assets/vid1.mp4' type='video/mp4'/>
            Your browser does not support the video tag.
          </video>

        </div>


        {/* About section */}
        <div ref={ref1} className='fade-in-section'>
          <div id="about" className='mx-auto text-5xl font-jost pt-5 md:pt-10 md:mt-15 mt-8'>
            About
          </div>
          <div className='sm:w-3/4 w-11/12 flex items-center flex-col lg:flex-row p-7 lg:px-20 mx-auto lg:divide-x-4 lg:divide-slate-500 divide'>
          
            <div className='flex-shrink-0 mb-4 md:mb-0 md:mr-5'>
              <Image src={'/assets/pic1.jpg'} alt='profile picture' width={250} 
              height={250} className='rounded-full'/>
            </div>
          
            <p className='font-jost text-center lg:text-left text-xl md:text-2xl md:mt-5 xl:text-4xl lg:px-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        
          </div>
        </div>

        {/* Films section */}
        <div ref={ref2} className="inline-block p-5 font-jost fade-in-section">
          <div id="about" className='mx-auto text-5xl font-jost m-10'>
            Films
          </div>
        
          <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center">
            <div className="relative w-full md:w-2/4 h-[25rem] overflow-hidden group">
              
              <video preload='auto' className="z-0 w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300 cursor-pointer" src='/assets/vid2.mp4'>
                Your browser does not support the video tag.
              </video>

              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Pep Talk</p>
              </div>

            </div>
          
            <div className="relative w-full md:w-1/4 h-[25rem] overflow-hidden group">
              
              <video preload='auto' className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300 cursor-pointer" src="/assets/vid1.mp4">
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Video Title</p>
              </div>

            </div>
          
            <div className="relative w-full md:w-1/4 h-auto overflow-hidden group">
              
              <video preload='auto' className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300 cursor-pointer" src="/assets/vid1.mp4">
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">
                  Push for Progress 
                </p>
              </div>

            </div>
          
            <div className="relative w-full md:w-2/4 h-auto overflow-hidden group">
              
              <video preload='auto' className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300 cursor-pointer" src="/assets/vid2.mp4">
                Your browser does not support the video tag.
              </video>

              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Video Title</p>
              </div>

            </div>
          </div>
        </div>

        <button className="p-3 m-5 hover:bg-white hover:text-slate-925 ease-in-out duration-300 border-[2px] text-white font-jost text-xl mb-40" type="submit">
          View More Films
        </button>

      </div>
    </>
  )
}
