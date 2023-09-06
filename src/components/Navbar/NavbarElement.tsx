import Link from 'next/link';
import React from 'react'

interface NavbarElementProps {
  destination: string,
  link: string
}

const NavbarElement: React.FC<NavbarElementProps> = ({ destination, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a href="films" className='text-white text-xl hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>{destination}</a>
    </Link>
  );
};


export default NavbarElement;