import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className="flex justify-center font-serif py-9">

        <video autoPlay loop muted 
          className='absolute w-3/4 h-auto brightness-50 py-10 z-1'>
          <source src='/assets/vid1.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <h1 className='z-10 text-7xl'>ROSEMOND FILMS</h1>

        <p className='z-10 px-44 py-24 text-2xl font-serif'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      </div>
    </main>
  )
}
