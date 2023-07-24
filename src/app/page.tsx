import Footer from '@/components/Footer';
import { EB_Garamond } from 'next/font/google';
import VideoCard from '@/components/VideoCard';

const gara = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
})

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export default function Home() {
  return (
    <>
      <div className='text-center'>
        
        <h1 className={`hidden md:block py-1 pb-3 sm:text-5xl md:text-7xl sm:py-5 ${gara.className}`}>ROSEMOND FILMS</h1>
        
        {/* add autoPlay tag back */}
        <video loop muted className='sm:w-4/5 md:3/4 brightness-50 z-10 mx-auto'>
          <source src='/assets/vid1.mp4' type='video/mp4'/>
          Your browser does not support the video tag.
        </video>

        <p className='font-jost mx-auto py-10 sm:px-20 sm:text-2xl md:px-30 lg:px-60 
        md:text-3xl px-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="flex justify-center sm:justify-start">
          <VideoCard 
            videoSrc='/assets/vid1.mp4'
            title='Lorem ipsum dolor sit amet' 
            desc={description} 
            flexDirection="row" 
          />
        </div>

        <div className="flex justify-center sm:justify-end">
          <VideoCard 
            videoSrc="/assets/vid1.mp4"
            title="Lorem ipsum dolor sit amet" 
            desc={description} 
            flexDirection="row-reverse" 
          />

        </div>
          
        <Footer/>

      </div>
    </>
  )
}
