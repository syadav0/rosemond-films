import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="font-serif py-9">

        <h1 className='z-10 text-7xl text-center'>ROSEMOND FILMS</h1>

        <video autoPlay loop muted 
          className='absolute w-3/4 h-auto brightness-50 py-10 z-1 m-'>
          <source src='/assets/vid1.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

      </div>
    </main>
  )
}
