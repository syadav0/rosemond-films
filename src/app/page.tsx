import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import VideoCard from '@/components/VideoCard';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export default function Home() {
  
  
  return (
    <>
      <div className='text-center'>
        
        <h1 className={`hidden md:block py-1 pb-3 sm:text-5xl md:text-7xl sm:py-5 font-jost`}>ROSEMOND FILMS</h1>
        
        {/* add autoPlay tag back */}
        <video loop muted className='sm:w-4/5 md:3/4 brightness-50 z-10 mx-auto'>
          <source src='/assets/vid1.mp4' type='video/mp4'/>
          Your browser does not support the video tag.
        </video>


        <div id="about" className='mx-auto text-4xl font-jost pt-5 md:pt-10'>
          About
        </div>
        <div className='sm:w-4/5 md:3/4 flex items-center flex-col md:flex-row p-8 md:px-20 mx-auto'>
          
          <div className='flex-shrink-0 mb-4 md:mb-0 md:mr-4'>
            <Image src={'/assets/pic1.jpg'} alt='profile picture' width={250} 
            height={250} className='rounded-full'/>
          </div>
          
          <p className='font-jost text text-center md:text-left sm:text-2xl md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        
        </div>


        <div className="flex justify-center md:justify-start font-jost">
          <VideoCard 
            videoSrc='/assets/vid1.mp4'
            title='Push for Progress' 
            desc='Short film at the University of Maryland, College Park'
            flexDirection="row"
            text="right" 
          />
        </div>

        <div className="flex justify-center md:justify-end font-jost">
          <VideoCard 
            videoSrc="/assets/vid2.mp4"
            title="Pep Talk" 
            desc={description} 
            flexDirection="row-reverse"
            text="left" 
          />
        </div>
      
      </div>

      <Footer/>
    </>
  )
}
