import { EB_Garamond } from 'next/font/google'

const gara = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <div className='py-5 text-center'>
        
        <h1 className={`text-7xl py-5 ${gara.className}`}>ROSEMOND FILMS</h1>
        
        {/* add autoPlay tag back */}
        <video loop muted className='w-3/4 brightness-50 z-10 mx-auto'>
          <source src='/assets/vid1.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <p className='font-jost text-3xl mx-auto py-10 px-60'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className='mt-20 relative flex w-1/2'>
          {/* add autoPlay tag back */}
          <video loop muted className='brightness-50 object-cover w-auto z-0'>
            <source src='/assets/vid1.mp4' type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

          <div className='absolute text-2xl w-full h-full flex justify-center items-center
          opacity-0 hover:opacity-100'>
            <p className='hover-blink'>[ play ]</p>
          </div>
          
        </div>
        

      </div>
    </>
  )
}
