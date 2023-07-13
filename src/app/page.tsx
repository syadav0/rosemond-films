import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">

      <div className="flex justify-center font-serif py-9">

        <video autoPlay loop muted 
          className='absolute w-3/4 h-auto brightness-50 py-10 '>
          <source src='/assets/vid1.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <h1 className='z-10 text-7xl'>ROSEMOND FILMS</h1>
        <p className='z-10 text-4xl'>
          Redefining films through creativity and technique.
        </p>


      </div>
    </main>
  )
}
