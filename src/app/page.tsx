'use client'

import { useRef, useState } from 'react';
import Image from 'next/image';
import VideoCard from '@/components/VideoCard';
import useFadeIn from '@/components/FadeIn';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export default function Home() {
  
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  useFadeIn(ref1);
  useFadeIn(ref2);
  useFadeIn(ref3);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);  

  return (
    <>
      <div className='text-center text-white'>
        
        <h1 className='hidden md:block py-1 pb-3 sm:text-5xl md:text-7xl sm:py-5 font-jost'>
          ROSEMOND FILMS
        </h1>
        
        {/* add autoPlay tag back */}
        <div className='flex justify-center items-center font-jost'>
          <div className='z-10 text-xl md:text-6xl absolute md:w-[50rem] w-[20rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          
          <video autoPlay loop muted className='z-0 h-auto md:object-contain 
          brightness-[0.80]'>
            <source src='/assets/vid1.mp4' type='video/mp4'/>
            Your browser does not support the video tag.
          </video>

        </div>


        {/* About section */}
        <div ref={ref1} className='fade-in-section'>
          <div id="about" className='mx-auto text-4xl font-jost pt-5 md:pt-10 md:mt-15 mt-8'>
            About
          </div>
          <div className='sm:w-4/5 md:3/4 flex items-center flex-col lg:flex-row p-7 lg:px-20 mx-auto md:mb-20 mb-5'>
          
            <div className='flex-shrink-0 mb-4 md:mb-0 md:mr-4'>
              <Image src={'/assets/pic1.jpg'} alt='profile picture' width={250} 
              height={250} className='rounded-full'/>
            </div>
          
            <p className='font-jost text-center lg:text-left sm:text-xl md:text-2xl lg:text-3xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        
          </div>
        </div>

        <div className="inline-block p-5 my-10">
          <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center">
            <div className="relative w-full md:w-2/4 h-[25rem] overflow-hidden group">
              <video className="z-0 w-full h-full object-cover" src='/assets/vid2.mp4'>
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Pep Talk</p>
              </div>
            </div>
          
            <div className="relative w-full md:w-1/4 h-[25rem] overflow-hidden group">
              <video className="w-full h-full object-cover" src="/assets/vid1.mp4">
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Video Title</p>
              </div>
            </div>
          
            <div className="relative w-full md:w-1/4 h-auto overflow-hidden group">
              <video className="w-full h-full object-cover" src="/assets/vid1.mp4">
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Video title</p>
              </div>
            </div>
          
            <div className="relative w-full md:w-2/4 h-auto overflow-hidden group">
              <video className="w-full h-full object-cover" src="/assets/vid2.mp4">
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold ml-3 mt-3">Video Title</p>
              </div>
            </div>
          </div>
        </div>





      </div>
    </>
  )
}
