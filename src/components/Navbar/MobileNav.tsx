import Link from 'next/link'

interface MobileNavBarElementProps {
  destination: string,
  link: string
}

const MobileNavBarElement: React.FC<MobileNavBarElementProps> = ({ destination, link }) => {
    
  return (
    <div>
      <Link href={link} legacyBehavior>
        <a className='text-white text-xl hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>{destination}</a>
      </Link>
    </div>
  );
};


export default MobileNavBarElement;